kw = ['Game of Thrones', 'GOT', 'Lannister','Jon Snow', 'Sansa Stark','Arya Stark','Cersei Lannister','Dies','death','dies','killed','Bran Stark','Petyr Baelish','Ygritte','Sandor Clegane','Khal Drogo','Margaery Tyrell','Iron throne','stark','killed', 'GOT Spoiler', 'Game of thrones spoiler','spoiler','Spoiler', 'GAME OF THRONES', 'death', 'DEAD', 'Dead', 'Died', 'DEATH', 'Death', 'DIED','winter is comming','Targaryen','Tyrell','Baratheon','Tully','Bolton']
tags = "SPANEMBIULOLI";
total = 0;

for(var ii = 0; ii < kw.length; ii++)
{
	o = $(`:contains(${kw[ii]}):not(:has(:contains(${kw[ii]})))`)
	for(var i = 0; i < o.length; i++)
	{
		if (!o[i].parentNode || o[i].parentNode.nodeName === "BODY") {
          continue;
        }
		hideSpoiler(o[i]);
		total++;
	}
}

if(total >= 10) {
	headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
	for(var i = 0; i < headings.length; i++) hideNode(headings[i]);
}

function hideSpoiler(node) {
	ancestor = node.parentNode;
	if(ancestor != null) {
		if (ancestor.parentNode != null 
				&& ancestor.tagName != 'BODY')
				ancestor = ancestor.parentNode;	
		imgs = ancestor.getElementsByTagName('img');
		for(var i = 0; i < imgs.length; i++) 
			imgs[i].style.webkitFilter = "blur(50px)"
		lists = ancestor.getElementsByTagName('li');
		for(var i = 0; i < lists.length; i++) hideNode(lists[i]);
	}

	if (node == null || node.parentNode == null) return;
	all_child = node.parentNode.children;
	for(var i = 0; i < all_child; i++) {
		var type = all_child[i].tagName;
		if (tags.match(type) != null) hideNode(all_child[i]);
	}
	hideNode(node);
}

function hideNode(node) {
	node.textContent = '[TEXT BLOCKED: Spoiler detected]';
	node.style.color = 'red'
}

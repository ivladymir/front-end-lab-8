var rootNode = document.getElementById("root");

var menu=document.createElement("div");

function tree(obj, parent){

	for (var i=0; i<obj.length; i++){
		
		var ul=document.createElement("ul");
		parent.appendChild(ul);

		var li=document.createElement("li");
		ul.appendChild(li);
		
		var p=document.createElement("p");
		li.appendChild(p);
		
		var icon=document.createElement("i");
		icon.className = "material-icons";
		if (obj[i].folder) {
			icon.innerHTML = "folder";
		}else{
			icon.innerHTML = "insert_drive_file";
		}

		var span=document.createElement("span");
		
		p.appendChild(icon);
		p.appendChild(span);
		p.addEventListener("click", toggle);

		span.innerHTML = obj[i].title;

		if(obj[i].children){
			tree(obj[i].children, ul);
		}else if (!obj[i].children && obj[i].folder){
			var p=document.createElement("p");
			p.innerHTML = "Folder is empty";
			li.appendChild(p);
		}
	}
}


function toggle(p) {
  if (this.nextElementSibling.style.display != "none") {
    this.nextElementSibling.style.display = "none";
    this.children[0].innerHTML = "folder";
  } else {
    this.nextElementSibling.style.display = "block";
    this.children[0].innerHTML = "folder_open";
  }
}


tree(structure, menu);
rootNode.appendChild(menu);
var rootNode = document.getElementById("root");

var all=document.createElement("div");
var detais=document.createElement("div");

allTanks(tanks, all);
tank(tank, detais);

rootNode.appendChild(all);

function allTanks(obj, parent){
	var description=document.createElement("h1");
	description.className="headline";
	description.innerHTML="Most popular tanks";
	parent.appendChild(description);

	for (var i=0; i<obj.length; i++){
		var a=document.createElement("a");
		var item=document.createElement("div");
		var photo=document.createElement("img");
		var detais=document.createElement("div");
		var countryFlag=document.createElement("img");
		var level=document.createElement("h3");
		var model=document.createElement("p");

		item.className="item";
		photo.className="preview";
		detais.className="detais";
		countryFlag.className="country";
		level.className="level";
		model.className="model";	

		parent.appendChild(a);
		a.appendChild(item);
		item.appendChild(photo);
		item.appendChild(detais);
		detais.appendChild(countryFlag);
		detais.appendChild(level);
		detais.appendChild(model);

		photo.src=obj[i].preview;
		countryFlag.src=obj[i].country_image;
		level.innerHTML=obj[i].level;
		model.innerHTML=obj[i].model;

		a.addEventListener('click', function () {
			rootNode.replaceChild(detais, all);
		})
	}
}


function tank(item, parent){
	var countryFlag=document.createElement("img");
	var model=document.createElement("h1");
	var previewBox=document.createElement("div");
	var preview=document.createElement("h3");
	var tankImg=document.createElement("img");
	var characteristicsBox=document.createElement("div");
	var characteristics=document.createElement("h3");
	var table=document.createElement("table");
	var aBack=document.createElement("a");
	var back=document.createElement("h4");
	
	countryFlag.src=tank.country_image;
	model.innerHTML =tank.model + ' (<span>level</span> ' + tank.level + ')';
	preview.innerHTML="Preview";
	tankImg.src=tank.preview;
	characteristics.innerHTML="Characteristic";
	back.innerHTML="Back to list view";

	parent.appendChild(countryFlag);
	parent.appendChild(model);
	parent.appendChild(previewBox);
	parent.appendChild(characteristicsBox);
	previewBox.appendChild(preview);
	previewBox.appendChild(tankImg);
	characteristicsBox.appendChild(characteristics);
	characteristicsBox.appendChild(table);
	parent.appendChild(aBack);
	aBack.appendChild(back);

	for(key in tank.details){
        var row = document.createElement('tr'),
            c1 = document.createElement('td'),
            c2 = document.createElement('td');
            c1.innerHTML = key;
            c2.innerHTML = tank.details[key];
        row.appendChild(c1);
        row.appendChild(c2);
        table.appendChild(row);
    }
    characteristicsBox.appendChild(table);

    model.className="modelItem";

}
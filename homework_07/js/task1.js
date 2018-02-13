
let h=parseInt(prompt("Height is: "));

while(h<=0 || h>20 || !Number.isInteger(h)){
	console.error("Height must be natural number in correct range!");
   	h=parseInt(prompt("Height is: "));
}


for (let i = 0; i < h; i++) {
	let line="";
    for (let j = 1; j < h-i; j++) {
      line = line + "   ";
    }
    for (let k = 1; k <= (2*i+1); k++) {
      line = line + "[~]";
      if(k==(2*i+1)){
        line = line + "\n";
      }
    }
    console.log(line);
}
//line= space*(h-1) + block*((h*2)-1);
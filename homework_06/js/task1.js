
let a=parseFloat(prompt("Length of first side is:"));
let b=parseFloat(prompt("Length of second side is:"));
let c=parseFloat(prompt("Length of third side is:"));

let p=(a+b+c)/2;
let s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
let type;

if(a+b==0 || a+c==0 || b+c==0 || p<=0 || isNaN(p) || isNaN(s) || s.toFixed(2)==0){
	console.log("Incorrect data");
}
else {
	if(a*a==b*b+c*c || b*b==a*a+c*c || c*c==a*a+b*b){
		type="right triangle";
	} else if(a==b==c){
		type="equilateral";
	} else if(a==b || a==c || b==c){
		type="isosceles";
	}else {
		type="scalene";
	}
	
	if(s%1===0){
		console.log("Type of triangle is "+type+" and square is "+s.toFixed(0)+" ");
	}
	else {
		console.log("Type of triangle is "+type+" and square is "+s.toFixed(2)+" ");
	}
}








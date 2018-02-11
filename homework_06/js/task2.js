let euro=parseFloat(prompt("Amount of EURO is:"));
let usd=parseFloat(prompt("Amount of USD is:"));

while (euro<=0 ||  isNaN(euro)){
	euro=parseFloat(prompt("Amount of EURO is:"));
}
	
while (usd<=0 || isNaN(usd)){
	usd=parseFloat(prompt("Amount of USD is:"));
}
//rates at 11.02.2018
let eRate=33.2324;
let uRate=27.1240; 

let euros=euro*eRate;
let dollars=usd*uRate;
let cross=eRate/uRate;

console.log(euro+" euros are equal "+euros.toFixed(2)+" UAH, "+usd+" dollars are equal "+dollars.toFixed(2)+" UAH, one euro is equal "+cross.toFixed(2)+" dollars");


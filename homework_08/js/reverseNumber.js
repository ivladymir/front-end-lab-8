function reverseNumber(x){
	if (x < 0){
		return -reverseNumber(-x);
	}else{
		var str = x.toString();
		var strArray = str.split("");
		var revArray = strArray.reverse();
		var rev = revArray.join("");
		return Number(rev);
	}
	
}	
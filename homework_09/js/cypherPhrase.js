

function cypherPhrase(charactersMap, string){
	var stringArray=string.split("");
	getTransformedArray(stringArray, function(el){
		if(charactersMap.el){
			return charactersMap.el;
		}else{
			el;
		}
	});
	return stringArray.join("");
}
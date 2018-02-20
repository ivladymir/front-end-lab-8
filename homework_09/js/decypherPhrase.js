

function decypherPhrase(charactersMap, string){
	let newMap={};
	for (element in charactersMap){
		newMap.charactersMap.element=element;
	}
	let newString=cypherPhrase(newMap, string);
	return newString;
}


function getFilteredArray(array, predicateFunction){
	let filtered=[];
	forEach(array, function(el){
		if (predicateFunction(el)){
			filtered.push(el);
		}
	});
	return filtered;
}
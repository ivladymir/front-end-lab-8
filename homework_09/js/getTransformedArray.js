

function getTransformedArray(array, callfunc){
	let transformed=[];
	forEach(array, function(el){
		transformed.push(callfunc(el))
	});
	return transformed;
}
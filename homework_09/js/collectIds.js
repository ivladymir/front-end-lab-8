

function collectIds(array){
	
	function predicateFunction(movies){
		forEach(movies, function(){
			return movies.rating > 3.0;
		})
	}
	getFilteredArray(movies, predicateFunction());
	console.log(getFilteredArray);
}
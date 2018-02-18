function getMin(){
	for(var i=1; i < arguments.length; i++){
		if(arguments[i]> arguments[0]){
			var argMin=arguments[0];
		}else{
			var argMin=arguments[i];
		}
	}
	return argMin;
}

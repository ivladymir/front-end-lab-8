function debounce(func, ms){
	let timer=null;
	
	return function(arguments){
		function done(){
			func.apply(this.arguments);
			timer=null;
		}
		if (timer) {
      		clearTimeout(timer);
    	}
    	timer = setTimeout(done, ms);
  	};
}

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

let increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'
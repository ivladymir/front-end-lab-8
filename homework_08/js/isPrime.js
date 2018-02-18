function isPrime(x) {
	if (x <= 1) { 
        return false;
    } else {
        for (var i = 2; i < x; i++) {
            if (x % i === 0) {
                return false; 
            }
        }
        return true;
    }  
}
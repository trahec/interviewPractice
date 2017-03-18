//list all prime numbers within a given range

function isPrime(value){
	if(value!=1){
		for(var x = 2; x<value; x++){ 
			if((value%x) === 0){
				return false;
			}
		}
		return true;
	}
	return false;
}

var lowerRange = parseInt(1);
var upperRange = parseInt(20);
for(var y = lowerRange; y<upperRange+1; y++){
	var result = isPrime(y);
	if(result === true){
		console.log(y);
	}
}
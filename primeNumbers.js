//list all prime numbers within a given range

function isPrime(value){
	for(var x = 2; x<value; x++){ 
		if((value%x) === 0){
			return false;
		}
	}
	return true;
}

var lowerRange = parseInt(10);
var upperRange = parseInt(13);
for(var y = lowerRange; y<upperRange+1; y++){
	var result = isPrime(y);
	if(result === true){
		console.log(y);
	}
}
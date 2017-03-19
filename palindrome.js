//return whether a string is a palindrome or not

var exports = module.exports = {};

exports.isPalindrome = function(string) {
    
	var array = string.split("");
	var arrayLength = array.length;
	var iterations = arrayLength/2;
	if(arrayLength%2!=0){
		iterations=(arrayLength-1)/2;
	}

	for(var frontIndex=0, lastIndex=arrayLength-1; frontIndex<iterations; frontIndex++, lastIndex--){
		if(array[frontIndex] != array[lastIndex]){
			return false;
		}
	}
	return true;
}
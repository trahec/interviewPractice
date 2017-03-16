//return whether a string is a palindrome or not

var test1 = "senilefelines";
var test2 = "abcb"

function isPalindrome(string){
	var stringArray = string.split("")

	var arrayLength = stringArray.length;
	var iterations;
	if(arrayLength % 2===0){
		iterations = arrayLength;
	}else{
		iterations = ((arrayLength - 1) / 2);
	}

	for(var frontIndex=0, lastIndex=arrayLength; frontIndex<iterations; frontIndex++, lastIndex--){
		//compare indices
		if( !(stringArray[frontIndex] === stringArray[lastIndex-1]) ){
			return false;
		}
	}
	return true;
}

var result1 = isPalindrome(test1);
console.log("Is " + test1 + " a palindrome? " + result1);
var result2 = isPalindrome(test2);
console.log("Is " + test2 + " a palindrome? " + result2);
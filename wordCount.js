/*
* Return word count of a string, with any type of whitespace symbol as separators
*/
var testString = "  The quick brown fox jumps 	over the lazy dog. "

function wordCount(string){
	var array = string.match(/\S+/g);
	return array.length;
}

var wordCount = wordCount(testString);
console.log("There are " + wordCount + " words in this string: \n\"" + testString + "\"");
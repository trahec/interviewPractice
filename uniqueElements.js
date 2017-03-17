/*
* Return a set containing unique values from two given sets
*/

var arrayA = ['a', 'b', 'g', 'c', 'd', 'x'];
var arrayB = ['c', 'd', 'e', 'f', 'g'];
var concatArray = arrayA.concat(arrayB); 
var uniqueArray = [];

function createUniqueArray(loopArray, analyseArray){
	
	for(var x=0; x<loopArray.length; x++)
	{
		var value = loopArray[x];
		if(analyseArray.indexOf(value) > -1){
		}
		else{
			uniqueArray.push(value);
		}
	}
}
createUniqueArray(arrayA, arrayB);
createUniqueArray(arrayB, arrayA);
console.log("Original arrays: \n" + arrayA + "\n" + arrayB + "\nUnique array: \n" + uniqueArray);
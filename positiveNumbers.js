/*
* Given an array, return a new array with only positive numbers, sorted in ascending order
*/

var mixedArray = [-1, -2, 100, 89, 3, 8, -11, 4, 7, -5, -12, 0, 99];
var positiveArray = [];

function cleanseArray(array){
	for(var x=0; x<array.length; x++){
		var value = parseInt(array[x]);
		if(value > 0){
			positiveArray.push(value);
		}
	}
	positiveArray.sort(sortNumeric);
}

//sort function applies an alphabetic sort, so have to provide a numberic sort as callback
function sortNumeric(a,b) {
    return a - b;
}

cleanseArray(mixedArray);
console.log(positiveArray);
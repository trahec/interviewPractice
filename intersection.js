/*
* Return intersection of two given arrays
*/

var resultArray = [];

function getIntersection(array1, array2){
	var loopArray;
	var checkedArray;
	if(array1.length < array2.length){
		loopArray = array1;
		checkedArray = array2;
	}
	else{//covers if arrayB is less than arrayA, or if they are of equal length
		loopArray = array2;
		checkedArray = array1;
	}

	for(var x=0; x<loopArray.length; x++){
		var value = loopArray[x];
		if(checkedArray.indexOf(value) > -1){
			resultArray.push(value);
		}
	}
	console.log("Arrays Given:\n" + array1 + "\n" + array2 + "\nIntersection:\n" + resultArray)
}

getIntersection(['a', 'b', 'g', 'c', 'd', 'x'], ['c', 'd', 'e', 'f', 'g']);
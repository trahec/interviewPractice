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
	else{
		loopArray = array2;
		checkedArray = array1;
	}

	for(var x=0; x<loopArray.length; x++){
		var value = loopArray[x];
		if(checkedArray.indexOf(value) > -1){
			resultArray.push(value);
		}
	}
}

getIntersection(['a', 'b', 'g', 'c', 'd', 'x'], ['c', 'd', 'e', 'f', 'g']);
console.log(resultArray);
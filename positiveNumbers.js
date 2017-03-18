/*
* Given an array, return a new array with only positive numbers, sorted in ascending order
*/
var exports = module.exports = {};
var positiveArray = [];
var error = {};

exports.cleanseArray = function(array){

	for(var x=0; x<array.length; x++){
		var value = parseInt(array[x]);
		if(!isNaN(value)){
			if(value > 0){
				positiveArray.push(value);
			}
		}
		else{
			error['code'] = 500;
			error['message'] = "Array contains non-numeric element " + value + " at index " + x;
			return error;
		}
	}
	return positiveArray.sort(sortNumeric);
	console.log(positiveArray); 
}

//sort function applies an alphabetic sort, so have to provide a numberic sort as callback
function sortNumeric(a,b) {
    return a - b;
}
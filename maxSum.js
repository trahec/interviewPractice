var exports = module.exports = {};

exports.getMaxSum = function(array){		
	var currentSum = 0; //currently calculated sum
	var prevMaxSum = 0; //the previous max sum, the sum which will always have the highest sum
	var startIndex = 0; 
	var endIndex = 0;
	var tempStartIndex = 0; //holds the start index after a reset, in case the prevMaxSum is updated
	
	for(var index=0; index<array.length; index++){
			var currentIndex = array[index];
			
			//if it's a negative value, reset the currentSum and reset the tempStartIndex
			if(currentIndex <= 0){
				currentSum = 0;
				tempStartIndex=index+1;
			}
			else{//else get the new currentSum
				currentSum = currentSum + currentIndex;
			}
			
			//if the currentsum is greater than the prevMaxSum, replace prevMaxSum with new greater value
			//also update the end and start index values
			if(currentSum > prevMaxSum){
				prevMaxSum = currentSum;
				endIndex = index;
				startIndex = tempStartIndex;
			}
			//else prevMaxSum stays the same
	}
	var indexStatement = "Start Index: " + startIndex + " End Index: " + endIndex; 
	return indexStatement;
}
/*
* Return number of 1s in a binary count of a given number n
*/

for(var n=1; n<10; n++){
	var binaryNumber = Number(n).toString(2);
	var numberOfOnes = binaryNumber.replace(/[^1]/g, "").length;
	console.log("Input: " + n + " Binary: " + binaryNumber + " Number of 1s: " + numberOfOnes);
}


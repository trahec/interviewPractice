var assert = require('assert');

var uniqueElementsScript = require('../uniqueElements.js');
function testUniqueElements(){
	var setA = new Set(['1', '2', '3']);
	var setB = new Set(['3', '4', '5']);
	var expectedResultSet = new Set(['1', '2', '4', '5']);
	
	var differenceSet = (setA.difference(setB)).union(setB.difference(setA));
	assert.strictEqual(expectedResultSet, expectedResultSet, "error");
}

testUniqueElements();

var positiveNumbersScript = require('../positiveNumbers.js');
function testPositiveNumbers(){

	//test numeric array
	var mixedNumericArray = [-1, -2, 100, 89, 3, 8, -11, 4, 7, -5, -12, 0, 99];
	var expectedResult = [ 3, 4, 7, 8, 89, 99, 100 ];
	var resultArray = positiveNumbersScript.cleanseArray(mixedNumericArray);
	var assertMessage = "Not expected array. Result: " + JSON.stringify(resultArray);
	assert.deepEqual(resultArray, expectedResult, assertMessage);
	
	//test array with letters
	var letterArray = ['a', -2];
	var errorObj = positiveNumbersScript.cleanseArray(letterArray);
	assert.deepEqual(errorObj.code, 500, errorObj.message);
}
testPositiveNumbers();
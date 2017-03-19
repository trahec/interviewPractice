var assert = require('assert');

var uniqueElementsScript = require('../uniqueElements.js');
function testUniqueElements(){
	var setA = new Set(['1', '2', '3']);
	var setB = new Set(['3', '4', '5']);
	var expectedResultSet = new Set(['1', '2', '4', '5']);

	var differenceSet = (setA.difference(setB)).union(setB.difference(setA));
	assert.strictEqual(expectedResultSet, expectedResultSet, "error");
	
	console.log("Unique elements test passed. Result:" + differenceSet);
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
	
	console.log("Positive numbers test passed. Result:" + resultArray);
}
testPositiveNumbers();

var palindrome = require('../palindrome.js');
function testPalindrome(){
	//test with odd palindrome
	var oddPalindrome = "abcba";
	var resultForOddPalindrome = palindrome.isPalindrome(oddPalindrome);
	var assertMessage1 = "Not expected result: " + resultForOddPalindrome;
	assert.ok(resultForOddPalindrome, assertMessage1);
	console.log("Palindrome test passed for '" + oddPalindrome + "' Result: " + resultForOddPalindrome);

	//test with even palindrome
	var evenPalindrome = "abba";
	var resultForEvenPalindrome = palindrome.isPalindrome(evenPalindrome);
	var assertMessage2 = "Not expected result: " + resultForEvenPalindrome;
	assert.ok(resultForEvenPalindrome, assertMessage2);
	console.log("Palindrome test passed for '" + evenPalindrome + "' Result: " + resultForEvenPalindrome);
	
	//test with string that's not a palindrome
	var notPalindrome = "abcbaa";
	var resultForNotPalindrome = palindrome.isPalindrome(notPalindrome);
	var assertMessage3 = "Not expected result: " + resultForNotPalindrome;
	assert.deepEqual(resultForNotPalindrome, false, assertMessage3);
	console.log("Palindrome test passed for '" + notPalindrome + "' Result: " + resultForNotPalindrome);
}
testPalindrome();
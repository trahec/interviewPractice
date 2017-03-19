/*
* Palindrome tester spec 
*/

describe("Palindrome Tester", function() {

	describe("Odd palindrome test", function(){
		var palindrome = require('../palindrome.js');
		var stringToTest = "abcba";
		
		it("should return true", function() {
			var result = palindrome.isPalindrome(stringToTest);
			expect(result).toBeTrue;
		});
	});

	describe("Even palindrome test", function(){
		var palindrome = require('../palindrome.js');
		var stringToTest = "abba";
		
		it("should return true", function() {
			var result = palindrome.isPalindrome(stringToTest);
			expect(result).toBeTrue;
		});
	});

	describe("Not a palindrome test", function(){
		var palindrome = require('../palindrome.js');
		var stringToTest = "abcsba";
		
		it("should return false", function() {
			var result = palindrome.isPalindrome(stringToTest);
			expect(result).toBeFalse;
		});
	});
});
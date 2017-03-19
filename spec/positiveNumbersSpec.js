/*
* Positive Numbers tester spec 
*/

describe("Positive Numbers Tester", function() {
	var positiveNumbers = require('../positiveNumbers.js');

	describe("Given a numeric array", function(){
		it("should return expected array, with no negative numbers", function(){
			var mixedNumericArray = [-1, -2, 100, 89, 3, 8, -11, 4, 7, -5, -12, 0, 99];
			var expectedResult = [ 3, 4, 7, 8, 89, 99, 100 ];
			var resultArray = positiveNumbers.cleanseArray(mixedNumericArray);
			expect(resultArray).toEqual(expectedResult);
		});
	});

	describe("Given a alphabetic array", function(){
		it("should return an error code 500", function(){
			var alphabeticArray = ['a', 'b'];
			var expectedResult = 500;
			var resultError = positiveNumbers.cleanseArray(alphabeticArray).code;
			expect(resultError).toEqual(expectedResult);
		});
	});
});
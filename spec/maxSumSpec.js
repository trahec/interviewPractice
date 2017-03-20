/*
* Max Sum tester spec 
*/

describe("Max Sum Tester", function() {

	describe("Given array of pos, neg or 0 values", function(){
		var maxSum = require('../maxSum.js');
		var inputArray = [3, 4, -1, 20, 3, 2, -6, 2, 3];
		
		it("should return max sum", function() {
			var result = maxSum.getMaxSum(inputArray);
			//expect(result).toEqual(20);
			expect(result).toEqual("Start Index: 3 End Index: 5");
		});
	});
});
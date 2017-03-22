/*
* https://www.hackerrank.com/challenges/30-operators
*/

'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
	_input = _input.split(new RegExp('[\n ]+'));
	main(+(_input[0]), +(_input[1]), +(_input[2]));    
});

function main(mealCost, tipPercent, taxPercent) {
    var tipCost = (parseFloat(mealCost) / 100) * parseFloat(tipPercent);
    var taxCost = (parseFloat(mealCost) / 100) * parseFloat(taxPercent);
    var totalCost = (mealCost + tipCost + taxCost).toFixed(0);
    console.log("The total meal cost is " + totalCost + " dollars.");
}
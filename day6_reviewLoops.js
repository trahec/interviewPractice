/*
* https://www.hackerrank.com/challenges/30-review-loop
*/

function processData(input) {
    var input_stdin_array = input.split("\n");
    var testCases = input_stdin_array[0];
    for(var testCaseLoop = 1; testCaseLoop <=testCases; testCaseLoop++){
        var testString = input_stdin_array[testCaseLoop];
        var testArray = testString.split("");
        var evenString = "";
        var oddString = "";
        for(var index=0; index<testArray.length; index++){
            if(index%2===0 || index===0){//index is even
                evenString = evenString + testArray[index];
            }
            else{//index is odd
                oddString = oddString + testArray[index];
            }
        }
        console.log(evenString + " " + oddString);
    }   
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
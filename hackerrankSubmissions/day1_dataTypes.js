/*
* https://www.hackerrank.com/challenges/30-data-types
*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    var i2, d2, s2;

    i2 = parseInt(input_stdin_array[0]);
    d2 = parseFloat(input_stdin_array[1]);
    s2 = input_stdin_array[2];

    console.log(parseInt(i) + i2);   
    console.log((parseFloat(d) + d2).toFixed(1));
    console.log(s + s2);
}
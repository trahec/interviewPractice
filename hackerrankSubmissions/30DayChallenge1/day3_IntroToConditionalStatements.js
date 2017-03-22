/*
* https://www.hackerrank.com/challenges/30-conditional-statements
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

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    if(n%2 != 0){ //odd
        console.log("Weird");
    }
    else if(n%2===0){//even
        if(n>1 && n<6 || n>20){
            console.log("Not Weird");
        }
        else if(n>5 && n<21){
            console.log("Weird");
        }
    }
}
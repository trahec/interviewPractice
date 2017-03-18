/*
* https://www.hackerrank.com/challenges/ctci-ransom-note
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
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazineArray = readLine().split(' ');
    ransomNoteArray = readLine().split(' ');

    function canMagazineBeUsed(){
        if(m<n){
            console.log("No");
            return false;
        }
        else{
            for(var x=0; x<ransomNoteArray.length; x++){
                var word = ransomNoteArray[x];
                var indexOfWord = magazineArray.indexOf(word);
                if(indexOfWord >-1){
                    magazineArray.splice(indexOfWord,1);
                }
                else{
                    console.log("No");
                    return false;
                }
            }
            console.log("Yes");
            return true;
        }
    }

    canMagazineBeUsed();
}
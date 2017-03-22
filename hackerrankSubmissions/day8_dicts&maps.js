/*
* https://www.hackerrank.com/challenges/30-dictionaries-and-maps
*/

function processData(input) {
    var input_array = input.split("\n");
    var phonebook_map = new Map();
    
    //add to phonebook_map
    for(var index=1; index<=input_array[0]; index++){
        var new_entry_array = (input_array[index]).split(" ");
        phonebook_map.set(new_entry_array[0], new_entry_array[1]);
    }
    
    //query phonebook_map
    for(var index=4; index<input_array.length; index++){
        var name = input_array[index];
        if(phonebook_map.has(name)){
            console.log(name + "=" + phonebook_map.get(name));
        }
        else{
            console.log("Not found");
        }
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
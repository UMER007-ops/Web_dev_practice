// 57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.  

function string_copies(str,number_copies){
    var copies = "";
    for (var i=0 ; i<number_copies ; i++){
        copies += str + " ";
    }
    return copies;
}

var number_copies = 10;
var str = "abc";

console.log(string_copies(str,number_copies));

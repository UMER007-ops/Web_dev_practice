// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.  

function new_string(str){
    var firstChar = str[0];
    var lastChar = str.charAt(str.length-1);
    var mid = str.substring(1,str.length-1);
    updated_str= lastChar + mid + firstChar;
    return (str.length <= 1) ? str : updated_str;
}
var str="umer";
console.log(new_string(str));


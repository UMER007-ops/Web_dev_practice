// 65. Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.  

function check_str(str){
    return str.length>=6 ? str.slice(-6)=="Script" ? `${str} end with Script` : `${str} do not end with Script` : `${str} length is less than 6`;
}
var str = "Java Script";
console.log(check_str(str));








// 37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.  

var str = "AhmedJaan";
var str1 = 'um'
function update_str(str){
    return str.length < 3 ? str.toUpperCase() : str.slice(0,3).toLowerCase() + str.slice(3);
}

console.log(update_str(str));
console.log(update_str(str1));









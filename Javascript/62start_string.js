// 62. Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three. 

function update_str(str){
    return str.length>=3 ? str.slice(-3) + str.slice(0,-3) : str;
}

var str = "asqwertdfyui";
console.log(update_str(str));


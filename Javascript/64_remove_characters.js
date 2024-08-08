// 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.

function concat_str(str1,str2){
    return str1.length === str2.length ? str1 +" " + str2 : str1.length > str2.length ? str1.slice(0,str2.length) +" "+ str2 : str1 + " " + str2.slice(0,str1.length); 
}

var str1 = "Asrtyuiopiroldfjv";
var str2 = "qwertyuip"
console.log(concat_str(str1,str2));







// 48. Write a JavaScript program to reverse a given string.  

var str = "remU si eman yM";
var str1 = "yob a ma I";

function reverse_mine(str){
    var update_str="";
    for (var i=str.length-1; i>=0 ; i--){
        update_str+=str[i];
    }
    return update_str;
}

function reverse(str){
    return str.split("").reverse().join("");
}


console.log(reverse_mine(str));

console.log(reverse(str1))
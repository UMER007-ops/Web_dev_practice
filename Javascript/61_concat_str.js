// 61. Write a JavaScript program to concatenate two strings except for their first character. 

function concat_str(str1,str2){
    return str1.slice(1) +" "+ str2.slice(1);
}

var str1 = "umer", str2 = "khan";
console.log(concat_str(str1,str2));

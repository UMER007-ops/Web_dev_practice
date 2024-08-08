// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  

var str = "system";
var str1 = "Pysystem"

function string_py(str){
    return (str[0]==="P" && str[1]==="y") ? str : str+"Py";
}

console.log(string_py(str));

console.log(string_py(str1));

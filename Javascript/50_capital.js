// 50. Write a JavaScript program to capitalize the first letter of each word in a given string.  

function capitalize(str){
    str = str.split(" ");
    for(var i=0, x=str.length; i<x; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}

str="My name is umer";
console.log(capitalize(str));

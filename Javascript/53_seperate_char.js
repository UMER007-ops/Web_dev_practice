// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.  

function check_char(str){
    for(var i=0, x=str.length ; i<x ;i++){
        if(str[i]=="a" && str[i+1]!="b" && str[i+2]!="b" && str[i+3]!="b" && str[i+4] == "b" ){
            return "a and b are seperated by exactly 3 places";
        }
    }
    return "no such pattern found";
}

var str = "asmaadfb";
console.log(check_char(str));






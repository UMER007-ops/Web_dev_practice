// 55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's. 

function check_P_T(str){
    return str.replace(/[^p]/g,"").length==str.replace(/[^t]/g,"").length ? "equal number of p's and t's" : "number of p's and t's are not equal";
}

var str="pppttt";
console.log(check_P_T(str));


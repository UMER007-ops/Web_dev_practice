// 67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.  


function check_str(str){
    return str[0]==='P' || str[str.length-1]=='P' ? str.slice(1,-1) : str;  
}

var str = "Asjdk";

console.log(check_str(str));






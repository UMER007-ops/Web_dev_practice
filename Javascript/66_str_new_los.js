// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.  


function check_str(str){
    return str.slice(0,3)=="New" || str.slice(0,3)=="Los" ? str : `should start name with Los Or New`;  
}

var str =  "angeles";

console.log(check_str(str));
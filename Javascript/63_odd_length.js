// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.  

function odd_length(str){
    return str.length >= 3 ? str.length % 2 != 0 ? str.slice(Math.floor(str.length/2)-1,Math.floor(str.length/2)+2) : `${str} is not of odd length` : `${str} should have a length greater than or equal to 3`;    
}


var str = "qabsfetyumnjklc";
console.log(odd_length(str));


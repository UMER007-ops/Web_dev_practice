// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference. 

var num = 5;

function difference(num){
    return num>13 ? (2*Math.abs(13-num)) : 13-num;
}

console.log(difference(num));


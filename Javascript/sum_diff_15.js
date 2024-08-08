// 45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.  

function check_int(num1,num2){
    return num1===15 || num2===15 || num1+num2===15 || Math.abs(num1-num2)===15 ? true : false;
}
var num1=5,num2=20;
console.log(check_int(num1,num2));



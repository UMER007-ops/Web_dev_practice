// 88 Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.


function check_div(num1,num2,divisor){
    return ((num1%divisor===0 && num2%divisor===0) || (num1%divisor!==0 && num2%divisor!==0)) ? true : false; 
}

let num1=10, num2=15, num3=17, num4=19, num5=10, num6=20, divisor=4; 


console.log(check_div(num1,num2,divisor));
console.log(check_div(num3,num4,divisor));
console.log(check_div(num5,num6,divisor));


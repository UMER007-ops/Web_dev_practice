// Write a JavaScript program to check two given integers whether one is positive and another one is negative

function check_integers(num1,num2){
    return ((num1<0 && num2>0) || (num1>0 && num2<0)) ? true : false;
}
console.log(check_integers(10,10));


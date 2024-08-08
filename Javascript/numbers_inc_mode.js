// 42. Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function number_order(num1,num2,num3){
    return num1<num2 && num2<num3 ? "strict mode" : (num1>num2 && num2<num3) || (num1===num2 && num2<num3) ? "soft mode" : "undefined" ;
}

console.log(number_order(6,12,5));

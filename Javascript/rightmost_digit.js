// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

function rightmost_digits(num1,num2,num3){
    return num1%10==num2%10 && num1%10==num3%10 && num2%10==num3%10 ? `${num1} ${num2} ${num3} have the same rightmost digits`: num1%10==num2%10 ? `${num1} and ${num2} have the same last digit`: num1%10==num3%10 ? `${num1} and ${num3} have the same last digit` : num2%10==num3%10 ? `${num2} and ${num3} have the same last digit` : "all of them have different rightmost digits"
}

console.log(rightmost_digits(10 ,204,304))

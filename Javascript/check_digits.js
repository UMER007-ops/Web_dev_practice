// 36. Write a JavaScript program that checks whether the last digit of three positive integers is the same. 


function check_digits(num1,num2,num3){
    if (num1>0 && num2>0 && num3>0){
        return num1 % 10 === num2 % 10 && num2 % 10=== num3 % 10 && num1 % 10 === num3 % 10 ? `${num1} ${num2} ${num3} have same last digits.` : `${num1} ${num2} ${num3} have different last digits.`
    }
    return `${num1} ${num2} ${num3} do not have same last digits.`
}

console.log(check_digits(20,30,400));
console.log(check_digits(-20,30,400));
console.log(check_digits(20,-30,400));
console.log(check_digits(20,30,-400));






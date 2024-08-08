// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.

function range(num1,num2){
    return (num1>=40 && num1<=60) && (num2>=40 && num2<=60) ? `${num1} and ${num2} are in the range of 40 and 60 inclusive` :
    (num1>=70 && num1<=100) && (num2>=70 && num2<=100) ? `${num1} and ${num2} are in the range of 70 and 100 inclusive` : 'numbers are not in range of 70 and 100 or 40 and 60'
}

console.log(range(44,56))
console.log(range(70,95))
console.log(range(50,89))



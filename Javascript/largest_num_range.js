// 34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.

function range(num1,num2){
    return (num1>=40 && num1<=60) && (num2>=40 && num2<=60) ? (num1>num2) ? `${num1} is greater` : `${num2} is greater` : `${num1} and ${num2} out of range.`; 
}


console.log(range(45,60));
console.log(range(25,60));
console.log(range(45,80));





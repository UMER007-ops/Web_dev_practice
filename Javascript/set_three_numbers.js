// 41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.  

function check(num1,num2,num3){
    return num1===num2 && num2===num3 && num1===num3 ? 30 : num1===num2 || num2===num3 || num1===num3 ? 40 : 20;  
}

console.log(check(10,20,30));

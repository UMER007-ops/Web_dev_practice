// 47. Write a JavaScript program to check whether a given number exists in the range 40..10000.  
// For example 40 presents in 40 and 4000

function check_number(num1,num2,n){
    return n<40 || n>10000 ? false : n >= num1 && n <= num2 ? true : false; 
}

console.log(check_number(45,5000,100));


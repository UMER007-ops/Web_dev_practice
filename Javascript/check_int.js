// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8. 

function check(num1,num2){
    if (num1==8){
        return `num1 is 8`;
    }  
    else if(num2==8){
        return `num2 is 8`;
    }  
    else if(Math.abs(num1-num2)==8){
        return `difference of ${num1} and ${num2} is 8`;
    }
    else if(num1+num2==8){
        return `sum of ${num1} and ${num2} is 8`;
    }
    else{
        return false;
    }
}
console.log(check(2,6))

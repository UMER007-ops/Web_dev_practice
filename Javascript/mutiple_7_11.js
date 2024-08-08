// 46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.  

function check_multiple(num1,num2){
    return  (num1%7==0 || num1%11==0) && (num2%7!=0 && num2%11!=0) ? `${num1} is a multiple of 7 or 11` : (num2%7==0 || num2%11==0) && (num1%7!=0 && num1%11!=0) ? `${num2} is a multiple of 7 or 11` : "only one of the numbers should be a multiple of 7 or 11 ";
}

console.log(check_multiple(66,20));





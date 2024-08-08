// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.  

function check_integers(num1,num2){
    return num1>=50 && num1<=99 || num2>=50 && num2<=99 ? true : false;
}

console.log(check_integers(50,101));
console.log(check_integers(40,99));
console.log(check_integers(40,101));
console.log(check_integers(60,70));



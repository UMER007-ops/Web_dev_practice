// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range. 

function check_integers(num1,num2,num3){
    return num1>=50 && num1<=99 || num2>=50 && num2<=99 || num3>=50 && num3<=99 ? true : false;
}

console.log(check_integers(50,101,49));
console.log(check_integers(40,99,80));
console.log(check_integers(40,101,68));
console.log(check_integers(60,70,101));
console.log(check_integers(49,10,101));





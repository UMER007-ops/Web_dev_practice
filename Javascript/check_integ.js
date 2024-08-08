// 44. Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20. It is less than the others.

function check_integer(num1,num2,num3){
    return num1>=20 && num1<num2 && num1<num3 ? num1 : num2>=20 && num2<num1 && num2<num3 ? num2 : num3>=20 && num3<num1 && num3<num2 ? num3 : "none of them is greater than 20 or less than the others ";
}
console.log(check_integer(25,27,29));
console.log(check_integer(30,27,29));
console.log(check_integer(35,32,29));
console.log(check_integer(29,29,29));
console.log(check_integer(10,9,19));
console.log(check_integer(109,9,19));






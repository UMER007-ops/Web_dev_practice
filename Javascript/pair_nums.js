// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50. 

function check_pair(num1,num2){
    return (num1===50 || num2===50 || num1+num2===50) ? true : false;
}

// one number is 50 so it return true
console.log(check_pair(50,90));

// sum is 50 so it return true
console.log(check_pair(40,10));

// sum is 60 and none of the numbers is 50 so it return false
console.log(check_pair(40+20));


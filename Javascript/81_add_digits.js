// Write a JavaScript program to add two digits to a given positive integer of length two.

function add_digits(n){
    return Math.floor(n%10 + n/10);
}

var num = 18;
console.log(add_digits(num));



// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  

function multiple(num){
    return (num%3==0 && num%7==0) ? `${num} is a mutiple of both 3 and 7` : (num%3==0 ) ? `${num} is a multiple of 3` : (num%7==0 ) ? `${num} is a multiple of 7` : `${num} is not a multiple of 3 or 7`;
}
console.log( multiple(21));
console.log( multiple(24));
console.log( multiple(28));
console.log( multiple(38));




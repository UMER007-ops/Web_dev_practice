// Write a JavaScript program to find the largest of three given integers.  

var a=20,b=20,c=20;

function greatest(a,b,c){
    return a>=b && a>=c ? a : b>=a && b>=c ? b : c>=a && c>=b ? c  : 'all of them are equal';  
}

console.log(greatest(a,b,c));


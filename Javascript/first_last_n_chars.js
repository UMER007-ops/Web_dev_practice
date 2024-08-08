// 68. Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n. 


function new_str(str,n){
    return str.length>=n ? str.slice(0,n) + str.slice(-n) : `length of str should be greater than ${n}`;
}

var str = "cbqewrtyui" , n=4;
console.log(new_str(str,n));



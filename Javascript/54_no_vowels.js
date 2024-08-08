// 54. Write a JavaScript program to count the number of vowels in a given string. 

// by me
function check_vowels(str){
    var count=0;
    var vowels = [ 'a' , 'e' , 'i' , 'o' , 'u'];
    for(var i=0, x=str.length; i<x; i++){
        for(var j=0, y=vowels.length; j<y ; j++){    
            if (str[i] == vowels[j]){
                count = count+1;
            }
        }
    }
    return count;
}

// another way to do the above by w3resource

function check_vowels1(str){
    return str.replace(/[^aeiou]/g,"").length;
}

var str="abdospeouirnualdkfei";
console.log(check_vowels(str));

console.log(check_vowels1(str));


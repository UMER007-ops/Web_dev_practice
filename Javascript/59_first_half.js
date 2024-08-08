// 59. Write a JavaScript program to extract the first half of a even string.

function first_half(str){
    if(str.length%2 == 0){
        updated_str="";
        for(var i=0 , x=str.length/2 ; i<x ; i++){
            updated_str += str[i];
        }
    }
    return updated_str;
}

//  Another way to do the above
function first_half1(str){
    if(str.length%2 == 0){
        return str.slice(0,str.length/2);
    }
    return str;
}

str = "abdu";
console.log(first_half(str));

console.log(first_half1(str));
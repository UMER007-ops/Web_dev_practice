// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.  

function test(arr){
    for(let i=0, x=arr.length ; i<x; i++){
        if(arr[i] == '1'){
            return `1 found at index ${i}`;
        }else if(arr[i] == '3'){
            return `3 found at index ${i}`;
        }
    }
    return "1 and 3 not found";
}    

let arr = [2,1,7,3,8];
console.log(test(arr));

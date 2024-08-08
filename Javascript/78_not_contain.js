// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.  

function test_arr(arr){
    for(let i=0, x=arr.length; i<x ; i++){
        if(arr[i] == '1' || arr[i] == '3'){
            return false
        }
    }
    return true
}

let arr = [2,56,75,9,8];
console.log(test_arr(arr));





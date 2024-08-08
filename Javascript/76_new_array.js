// 76. Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1. 

function create_arr(arr){
    return arr.length>=1 ? [arr[0],arr[arr.length-1]] : arr;
}

let arr = [3,5,2,7,1]; 
console.log(create_arr(arr));



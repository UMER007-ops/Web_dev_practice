// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.  

function sum_arr(arr){
    return arr.length>=3 ? arr[0] + arr[1] + arr[2] : "arr is not of length 3";
}

var arr = [1,4,6,4,8,9];
console.log(sum_arr(arr));







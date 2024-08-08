// 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

function swap_arr(arr){
    if(arr.length>=1){
    let a=arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = a;
    }
    return arr;
}

let arr = [1,2,3,10,6];
console.log(swap_arr(arr));





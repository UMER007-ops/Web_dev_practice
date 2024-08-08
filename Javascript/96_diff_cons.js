// 96. Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers. 

function sum_cons_diff(arr){
    let sum=0;
    for(let i=0, x=arr.length; i<x-1; i++){
        sum += Math.abs(arr[i]-arr[i+1]);
    }
    return sum;
}
let arr = [2,5,6,7,10,13,1,19,15,-5];
let arr1 = [1,2,3,2,-5];

console.log(sum_cons_diff(arr));
console.log(sum_cons_diff(arr1));



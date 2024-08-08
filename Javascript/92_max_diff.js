// 92. Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.

function int_diff(arr){
    let result=0;
    for (let i=0,x=arr.length;i<x-1;i++){
        let diff=0;
        for(let j=i; j<i+2;j++){
            diff=Math.abs(arr[j]-arr[j+1]);
            if(diff>result){
                result = diff;
            }
        }
    }
    return result;
}

let arr1 = [2,4,17,28,19,20];
let arr = [1,2,3,8,9];

console.log(int_diff(arr));
console.log(int_diff(arr1));







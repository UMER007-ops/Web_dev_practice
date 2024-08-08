// 70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3.

function rotated(arr){
    return arr.length >= 3 ?[arr[1],arr[2],arr[0]]: "length of array should be greater than or equal to 3";
}

var arr = [3,4,5];

console.log(rotated(arr));

// 72. Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.  

function first_last(arr){
    return arr[0] === arr[arr.length-1] ? `first and last element is ${arr[0]}` : "first and last element are not same";
}

var arr = [1,3,4,6,7];
console.log(first_last(arr));

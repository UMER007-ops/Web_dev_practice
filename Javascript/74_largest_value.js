// 74. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.

function largest_value(arr){
    var largest = arr[0] > arr[arr.length-1] ? arr[0] :arr[arr.length-1];
    for(let i=0, x=arr.length ; i<x ; i++){
        arr[i] = largest;
    }
    return arr;
}

let arr = [12,6,2,9,0,11];
console.log(largest_value(arr));


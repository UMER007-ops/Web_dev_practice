// 95. Write a JavaScript program to replace all numbers with a specified number in an array of integers.

function replace_nums(arr ,new_val ,old_val){
    for(let i=0, x=arr.length; i<x; i++){
        if(arr[i]===old_val){
            arr[i]=new_val;
        }
    }
    return arr;
}

let arr = [2,4,5,6,3,2,45,2,3];
console.log(replace_nums(arr,5,2));





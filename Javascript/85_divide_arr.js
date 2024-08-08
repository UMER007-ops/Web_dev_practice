// 85. Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two. 

function sum_arr(arr){
    let result = [0,0];
    for (let i=0, x=arr.length; i<x; i++){
        if(i%2 == 0){
            result[0] += arr[i];
        }
        else{
            result[1] += arr[i];
        }
    }
    return result;
}

let arr = [1,2,3,4,15,17,19,20];
console.log(sum_arr(arr));









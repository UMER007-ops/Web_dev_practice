// 91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers. 

function max_sum_consecutive(arr,k){
    let result=0;
    for(let i=0, x=arr.length; i<x-k+1; i++){
        let count=0;
        for(let j=i; j<i+k ; j++){
            count += arr[j];
        }
        if(count>result){
            result = count;
        }
    }
    return result;
}

let arr = [4,2,17,18,20,3,45,7,9] , k=4;

console.log(max_sum_consecutive(arr,k));






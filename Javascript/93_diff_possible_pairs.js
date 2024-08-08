// 93. Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.


function max_diff(arr){
    let result=0,diff;
    for(let i=0, x=arr.length; i<x; i++){
        diff=0;
        for(let j=0; j<x; j++){
            diff=Math.abs(arr[i] - arr[j]);
            if(diff>result){
                result = diff;
            }
        }
    }
    return result;
}

let arr = [2,3,78,29,20,18];
console.log(max_diff(arr));






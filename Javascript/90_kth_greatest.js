// 90. Write a JavaScript program to find the kth greatest element in a given array of integers.

function kth_greatest(arr,k){
    for (let i=0,x=arr.length;i<x;i++){
        for(let j=i+1; j<x; j++){
            if(arr[i]<arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr[k-1];
}

let arr = [2,18,5,8,30,17,26], k=5;
console.log(kth_greatest(arr,k));



// 94. Write a JavaScript program to find the number appearing most frequently in a given array of integers. 

function freq_num(arr){
    let count=0,result=0;
    for(let i=0, x=arr.length; i<x; i++){
        count=0;
        for(let j=0; j<x; j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
        if(count>result){
            result=arr[i];
        }
    }
    return result;
}


// another way to do the above by w3 resource

function array_element_mode(arr){
    let ctr = [], ans=0, max_val=0, len=arr.length;
    for (let i=0; i<len; i++){
        if(arr[i]>max_val){
            max_val = arr[i];
        }
    }
    for(let i=0; i<max_val; i++){
        ctr.push(0);
    }
    for(let i=0; i<len; i++){
        ctr[arr[i]-1]++;
        if(ctr[arr[i]-1] > ctr[ans]){
            ans = arr[i]-1;
        }
    }
    return ans+1;
}

let arr = [2,3,5,2,3,1,2,6,7,1,2,29,19,19,19,19,19,19,19,19];
// console.log(freq_num(arr));
console.log(array_element_mode(arr));
















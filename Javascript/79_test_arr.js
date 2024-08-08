// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2. 

function test_arr(arr){
    let count_30 = 0 , count_40=0;
    for(let i=0 , x=arr.length ; i<x ; i++){
        if(arr[i]==30){
            count_30+=1;
        }else if(arr[i]==40){
            count_40+=1;
        }
    }
    return count_30==2 || count_40==2 ? `${arr} array contains 30 OR 40 twice` : `${arr} array do not contain 30 OR 40 twice`;
}

let arr = [1,23,30,70,80,30,40];

console.log(test_arr(arr));





// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.


var kthDistinct = function(arr, k) {
    let distinctElem = []
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for(let j=0 ; j<arr.length ; j++){
            if (arr[i]==arr[j]){
                count++;
            }
        }
        if(count==1){
            distinctElem.push(arr[i]);
        }
    }
    if (k <= distinctElem.length){          // if k less than or equal to distinct then print the first one else print empty string
        console.log(distinctElem[k-1])
    }
    else{
        console.log("")
    }
};

arr = ["d","b","c","b","c","a"]; 
k = 2;

kthDistinct(arr, k)








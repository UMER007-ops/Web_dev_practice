// 71. Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.  

function check_one(arr){
    return arr.length>=1 ? arr[0] == 1 ? `1 present at index 0` : arr[arr.length-1] == 1 ? `1 present at last index` : `1 not present at last index` : `1 not present at first index`
}

var arr = [1,2,4,1];
console.log(check_one(arr));










// 104. Write a JavaScript program to find two elements of an array such that their absolute difference is not larger than a given integer. However, it is as close as possible to the integer.

let different_values = (arr,int) => {
    let difference = 0, max_difference=0, i=0, j=0;
    for (i = 0; i < arr.length; i++) {
        for (j = i+1; j < arr.length; j++) {
            difference = Math.abs(arr[i]-arr[j])
            if(difference>max_difference && difference<=int)
                max_difference=difference
        }
        
    }
    return max_difference
}

console.log(different_values([12, 10, 33, 34], 10));
console.log(different_values([12, 10, 33, 34], 24));
console.log(different_values([12, 10, 33, 44], 40));







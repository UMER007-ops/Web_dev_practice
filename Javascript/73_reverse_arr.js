// 73. Write a JavaScript program to reverse the elements of a given array of integers of length 3. 

function reverse_arr(arr){
    return arr.reverse();
}

var arr = [6,4,1];
console.log(reverse_arr(arr));


// another way to do the above
function reverse3(array) {
    // Use the map method to iterate over the array and reverse the order
    return array.map(( element , idx, arr) => arr[(arr.length - 1) - idx]);
}

var array = [9,8,7];
console.log(reverse3(array))






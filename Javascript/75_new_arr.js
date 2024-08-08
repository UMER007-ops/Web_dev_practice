// 75. Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.  

function new_array(arr1,arr2){
    return [arr1[Math.floor(arr1.length/2)],arr2[Math.floor(arr2.length/2)]]
}

var arr1 = [1,3,4,5,6], arr2 = [8,9,7,3,6];
console.log(new_array(arr1,arr2));


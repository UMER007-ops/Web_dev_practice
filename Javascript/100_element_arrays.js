// 100. Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers. 


const check_common_element = (arr1,arr2) =>{
    console.log(arr1)
    console.log(arr2)
    for (let i=0; i<arr1.length; i++){
        if (arr2.indexOf(arr1[i]) != -1){
            return true
        }
    }
    return false
}

arr1 = [1,2,3]
arr2 = [6,4,5]
console.log(check_common_element(arr1,arr2))







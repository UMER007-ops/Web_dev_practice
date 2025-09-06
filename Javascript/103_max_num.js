// 103. Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.  

let max_number = (int) => {
    let int_str = int.toString()
    let result = 0, max_num = 0;
    let slicedStr = ""
    let i;
    for (i=0; i<int_str.length; i++ ){
        slicedStr = int_str.slice(0,i) + int_str.slice(i+1)
        result = parseInt(slicedStr)
        if(result>max_num){
            max_num = result
        }
    }
    return max_num
}


console.log(max_number(152)) // Output: 52
console.log(max_number(82345)) // Output: 8345
console.log(max_number(2736)) // Output: 736







// 32. Write a JavaScript program to find the closest value to 100 from two numerical values. 

var num1 = 99 , num2 = 99;

function closest(num1,num2){
    var difference1 = Math.abs(100-num1);
    var difference2 = Math.abs(100-num2);
    return difference1===difference2 ? 'both numbers are equally close to 100' : difference1<difference2 ? String(num1) + " is close to 100" : String(num2) + " is close to 100"; 
}

console.log(closest(num1,num2));





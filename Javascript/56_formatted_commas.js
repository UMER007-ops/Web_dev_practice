// 56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas. 

function formatted_num(num1,num2){
    var div = Math.round(num1/num2).toString();
    var resultant_Array = div.split("");
    if (div>=1000){
        for(var i=div.length-3; i>0 ; i-=3){
            resultant_Array.splice(i,0,",");
        }
    }
    return resultant_Array.join("");
}

var num1=80000,num2=8;
console.log(formatted_num(num1,num2))





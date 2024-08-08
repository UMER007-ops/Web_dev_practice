// 89. Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.  
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z.


function result(num1,num2,result){
    if(num1+num2===result)
        return `${num1}+${num2}=${result}`;
    else if(num1*num2===result)
        return `${num1}*${num2}=${result}`;
    else if(num1-num2===result)
        return `${num1}-${num2}=${result}`;
    else if(num1/num2===result)
        return `${num1}/${num2}=${result}`;
    else
     return unknown;
}


console.log(result(8,2,6));




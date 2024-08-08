// Write a JavaScript program to calculate the days left before Christmas.  

var today = new Date();
var cmas = new Date(today.getFullYear(),11,25);
if(cmas.getMonth()==11 && cmas.getDate()>25){
    cmas.setFullYear(cmas.getFullYear()+1);
}
var one_day = 1000*60*60*24;
var difference = Math.ceil((cmas.getTime() - today.getTime())/(one_day));
console.log(difference);



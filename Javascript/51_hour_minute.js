// 51. Write a JavaScript program to convert a given number into hours and minutes.  

function conver_time(number){
    var hours = Math.floor(number/60);
    var minutes = number%60;
    return String(hours) + " hours " + String(minutes) + " minutes"; 
}

console.log(conver_time(250));


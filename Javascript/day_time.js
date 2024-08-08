var today = new Date();
// console.log(today)
var day = today.getDay();
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Today is: ",days[day]);
var hours=today.getHours();
var minutes=today.getMinutes();
var seconds=today.getSeconds();
var prepand=(hours>=12) ? "P.M" : "A.M";
if(hours===0 && prepand==="A.M"){
    if(minutes===0 && seconds===0){
        prepand="P.M";
        hours=0;
    }else{
        prepand="A.M";
        hours=0;
    }
}
if(hours===0 && prepand==="P.M"){
    if(minutes===0 && seconds===0){
        prepand="A.M";
        hours=0;
    }else{
        prepand="P.M";
        hours=0;
    }
}

console.log("Current time is: ",hours,prepand,":",minutes,":",seconds)





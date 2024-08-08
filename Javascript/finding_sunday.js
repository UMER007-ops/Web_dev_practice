// 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. 

for(year=2014 ; year<=2050; year++){
    var day = new Date(year,0,1);
    if (day.getDay()===0){
        console.log("The 1st January is sunday for :",year);
    }
}



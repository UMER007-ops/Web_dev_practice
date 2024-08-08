var year=2100;
// if(year%4===0){
//     if(year%100===0){               // checking for century years
//         if(year%400===0){           // if century year is true then it should be divisible by 400 as well
//             console.log("leap Year")
//         }else{
//             console.log("not leap Year")
//         }
//     }else{
//         console.log("leap Year")
//     }
// }else{
//     console.log("not leap Year")
// }

// another logic for doing the above

function leap(year){
    return year%100===0 ? year%400===0 : year%4===0   // here it checks first if the year is a century year if it is than it checks if it is divisible by 400 or esle if not century year than it should be divisible by 4 to be a leap year
}
if(leap(year)==true){
    console.log(" Leap year ");
}else{
    console.log(" not Leap year ");
}


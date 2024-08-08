// 35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string. 

var str="Ahmed Khan ";
function specific_char(str,char){
    for (var i=0; i<str.length; i++){
        if ((str.charAt(i)==char) && (i>=1 && i<=3)){
            return `${char} found at position ${i}.`;
        }
    }
    return `${char} not found between 2nd and 4th position.`;
}
var char = 'd'
console.log(specific_char(str,char));

// 58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.



function copies_str(str){
    return str.slice(-3).repeat(4);
}

var str = "abducode";
if(str.length>=3){
    var updated_str = copies_str(str);
    console.log(updated_str);
}else{
    console.log(`${str} should have 3 or more characters`);
}




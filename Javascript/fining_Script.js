// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one. 

function find_Script(str){
    return str.slice(4,10)=="Script" ? str.slice(0,4) + str.slice(10) : str
}


console.log(find_Script("abcdScripttyruieo"));
console.log(find_Script("abcdScriptumer"));
console.log(find_Script("abcdadbdScript"));
console.log(find_Script("abAhsanALI"));

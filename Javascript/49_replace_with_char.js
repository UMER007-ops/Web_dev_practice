// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  


function replace_alphabet(str){
    updated_str = "";
    for(var i=0, x=str.length; i<x ; i++){
        if(str[i]=="Z"){
            updated_str+="A";
        } else if(str[i]=="z"){
            updated_str+="a";
        } else{
            updated_str += String.fromCharCode(str.charCodeAt(i)+1);
        }
    }
    return updated_str;
}

var str = "Abdullah";
console.log(replace_alphabet(str));



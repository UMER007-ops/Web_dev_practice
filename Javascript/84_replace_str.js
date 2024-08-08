// 84. Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

function replace_char(str){
    let updated_str = "";
    for(let i=0, x=str.length; i<x; i++){
        if(str[i]=='z'){
            updated_str+='a';
        }
        else if(str[i]=='Z'){
            updated_str+='A';
        }else{
           updated_str+= String.fromCharCode(str.charCodeAt(i)+1);
        }
    }
    return updated_str;
}
let str = "adfz";
console.log(replace_char(str));





// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  

function check_Java(str){
    return str.slice(0,4)=='Java' ? `${str} starts with Java`: `${str} do not starts with Java`;
}
str='Java pro'
console.log(check_Java(str));
str1='Jana pro'
console.log(check_Java(str1));


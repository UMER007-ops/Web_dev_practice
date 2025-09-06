// 98. Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case. 
// Fox example "Write" will be write and "PHp" will be "PHP"

let lowerCase_upperCase = (str) => {
    let lowerCount = 0;
    let upperCount = 0;
    let result = ""
    for (let i=0; i<str.length; i++){
        if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)
            lowerCount++;
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90)
            upperCount++;
    }
    
    if(lowerCount<upperCount)
        for(let i=0; i<str.length; i++){
            if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)
                result += String.fromCharCode(str.charCodeAt(i)-32);
            else
                result += str[i]
}
            
    else
        for(let i=0; i<str.length; i++){
            if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90)
                result += String.fromCharCode(str.charCodeAt(i)+32);
            else
                result += str[i];
    }
    return result
} 

console.log(lowerCase_upperCase("Php"));






















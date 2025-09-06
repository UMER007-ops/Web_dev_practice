// 101. Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions. 

const check_adjacent_element =(str) =>{
    let upper_lower = false
    j=1
    for(let i=0; i<str.length-1; i++){
        if((str[i]>='A' && str[i]<='Z')  || (str[i]>='a' && str[i]<='z')){
            if((str[i]>='A' && str[i]<='Z' && str[j]>='a' && str[j]<='z') || (str[j]>='A' && str[j]<='Z' && str[i]>='a' && str[i]<='z')){
                upper_lower = true
                j++
            }else{
                upper_lower=false
                break
            }
        }else{
            upper_lower = false
            break
        }
    }
    return upper_lower
}

console.log(check_adjacent_element('xYr'));
console.log(check_adjacent_element('XXYr'));










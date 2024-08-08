// 83. Write a JavaScript program to find the longest string from a given array of strings.  

function longest_str(str){
    let longest_len = str[0].length;
    let longest = str[0];
    for(let i=0, x=str.length; i<x; i++){
        if(str[i].length>longest_len){
            longest = str[i];
            longest_len = str[i].length;
        }
    }
    return longest;
}

// The above can be done as follows
function longest_str1(str){
    let max = str[0].length;
    str.map( v => max = Math.max(max,v.length));
    let result = str.filter( v => v.length==max );
    return result;
}

let str = ['a','aa','aaa','aaaaa','aaaa'];

let str1 = ['b','bb','bbb','bbbbb','bbbb'];
console.log(longest_str1(str1));
console.log(longest_str(str));





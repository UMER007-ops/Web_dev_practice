// 52. Write a JavaScript program to convert letters of a given string alphabetically. 

function alphabeticalOrder(str){
    var arr = str.split("");
    for(var i =0 , x=str.length ; i<x; i++){
        for(var j = i+1 ; j<x; j++){
                if(arr[j].charCodeAt()<arr[i].charCodeAt()){
                    var temp=arr[i];
                    arr[i]= arr[j];
                    arr[j]=temp;
                }
        }   
    }
    return arr.join("");
}
var str ="Python";
console.log(alphabeticalOrder(str));

// Another way of doing the above

function alphabetOrder(str1){
    return str1.split("").sort().join("");
} 
var str1 = "javascript";
console.log(alphabetOrder(str1));




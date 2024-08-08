let animal = {
    name : "Zebra",
    legs: 4 
}

// for in loop
console.log("using for in loop\n");
for (let key in animal){
    console.log(key, animal[key]);
}

let arr = ["Ahsan" ,"Umer", "Abdullah\n"];
for (let index in arr){
    console.log(index , arr[index])
}

// for of loop
console.log("using for of loop\n");
for (let name of arr){
    console.log(name)
}

// forEach loop
console.log("using forEach loop");
arr.forEach(function(value){
    console.log(value);
})

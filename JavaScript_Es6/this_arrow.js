const user = {
    userName: "Umer",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to the store`);  // this refers to the present context/values
        console.log(this);  // it print reference of the whole current context
    }     
}

user.welcomeMessage();

user.userName = "Hassan"

user.welcomeMessage();  // this time the username is changed in the present context

console.log(this);  // it print current context of node which is empty here. The current context in browser will be window object beacuse window is a global object in browser



// function check(){
//     let username = "umer"
//     console.log(this.username);  // it will return undefined here. we cannot use (this) in normal functions. can use them in objects only 
// }

// check();

// const check = () => {
//     let username = "umer";
//     console.log(this);      // it prints undefined and this.username will give an error
// }

// check()


// explicit_arrow_functions

let add = (a,b) => {
    return a+b;
}
console.log(add(2,3));
 

// explixit arrow functions

let mult = (a,b) => a*b  

console.log(mult(2,3))

// above can also be written as

let sub = (a,b) => (a-b)

console.log(sub(3,2));


// explixit arrow functions returning objects

const lame= () => ({userName: "umer"})

console.log(lame())
// es5

// var details = {
//     name:"WsCube Tech",
//     contact: "12345",
//     email: "info@123.com"
// };
// var name = details.name;
// var contact = details.contact;
// var email = details.email;
// console.log(name);
// console.log(contact);
// console.log(email);


// es6

const details = {
    name:"WsCube Tech",
    contact: "12345",
    email: "info@123.com"
};

let {name:company_name,contact,email} = details
console.log(company_name);
console.log(contact);
console.log(email);

// es5 (arrays)
const arr = ["A","B","C","D"];
var v1 = arr[0];
console.log(v1);

// es 6 
let [v2,v3,v4,v5] = arr;
console.log(v2,v3);


// spread
const oldArray = [1,2,3,4,5];
const newArray = ["A","B","C",...oldArray,6,7,8,9,10];  // ... is to concatenate the older array values
console.log(newArray);

// rest
const sum = (...numbers) => {   // ... means can pass infinite arguments
    let total = 0;
    numbers.forEach((n) => {
        total+=n;
    });
    console.log(total);
}
sum(1,2,3,4,5,6,7,8,9,10);






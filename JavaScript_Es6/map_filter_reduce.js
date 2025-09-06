const coding = ["js", "ruby","java","python","cpp"]

const values = coding.forEach( (item) => {
    console.log(item)
    return item
} )

console.log(values);   // for each returns undefined

const myNums = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNums.filter( (num) => num > 4 ) // arrow function with explicit return
console.log(newNums);

let books = [
    {
        title: "Book One",
        genre: "Fiction",
        publish: 1998,
        edition: 2008,
    },
    {
        title: "Book Two",
        genre: "Non-Fiction",
        publish: 1981,
        edition: 2011,
    },
    {
        title: "Book Three",
        genre: "History",
        publish: 2000,
        edition: 2018,
    },
    {
        title: "Book Four",
        genre: "Science",
        publish: 1995,
        edition: 2020,
    },
    {
        title: "Book Five",
        genre: "Fiction",
        publish: 1970,
        edition: 2005,
    },
    {
        title: "Book Six",
        genre: "History",
        publish: 1989,
        edition: 2011,
    },
    {
        title: "Book Seven",
        genre: "Science",
        publish: 2005,
        edition: 2023,
    },
    { 
        title: "Book Eight",
        genre: "Non-Fiction",
        publish: 2007,
        edition: 2021,
    },
    {
        title: "Book Nine",
        genre: "History",
        publish: 2002,
        edition: 2020,
    },
]

let userBooks = books.filter((bk)=> bk.genre === "History")
console.log(userBooks);

console.log("---------------------------------------");

let userBooks1 = books.filter( (bk) => { return bk.publish >= 2000 } )
console.log(userBooks1);


let userBooks2 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
} )
console.log(userBooks2);


// Map function

const Nums = [1,2,3,4,5,6,7,8,9,10]

const newNum = Nums.map( (num) => num + 10  )

console.log(newNum);

// chaining 
const Numbers = Nums
                .map( (num) => num*10 )
                .map( (num) => num+1 )
console.log(Numbers)


const Number = Nums
                .map( (num) => num*10 )
                .map( (num) => num+1 )
                .filter( (num) => num>=40 )
console.log(Number)


// Reduce

const total = Nums.reduce( function (accumulator,currentValue) {
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`)
    return accumulator+currentValue 
}, 0)           // 0 is the initial value for the accumulator and then each time the sum of accumulator and current value will be the value of accumulator for the next iteration and current value refers to the value of array at each index. we can give any value as initial value of accumulator
console.log(total)


// another way of doing the above 

const myTotal = Nums.reduce( (accumulator,currentValue) => accumulator+currentValue, 0)    

console.log(myTotal);


const shoppingCart = [
    {
        course: "js",
        price: 2999
    },
    {
        course: "python",
        price: 999
    },
    {
        course: "mobile dev",
        price: 5999
    },
    {
        course: "Data science",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc+item.price, 0)

console.log(priceToPay);





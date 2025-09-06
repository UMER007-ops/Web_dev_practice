// promise = An object that manage asynchronous operation.
//           Wrap a promise object around (asynchronous code)
//           "I promise to retain a value"
//           Pending -> RESOLVED or REJECT
//           new Promise(resolve,reject) => (asynchronous code)

// Do these chores in order

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// function walkDog(callback){
//     setTimeout(()=>{
//         console.log("You walk the dog");
//         callback();
//     },1500)
// }
// function cleanKitchen(callback){
//     setTimeout(()=>{
//         console.log("You clean the kitchen");
//         callback();
//     },2500)
// }
// function takeOutTrash(callback){
//     setTimeout(()=>{
//         console.log("You take out the trash");
//         callback();
//     },500)
// }

// callback chaining
// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=> console.log("You finished all the chores!"));
//     })
// })



// promises are an alternate of the above callbacks


function walkDog(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const walkTheDog = true;
            if(walkTheDog)
                resolve("You walk the dog");
            else
                reject("You did not walk the dog")
        },1500)
    })
}
function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cleanTheKitchen = true
            if (cleanTheKitchen)
                resolve("You clean the kitchen");
            else
                reject("You did not clean the kitchen")
        },2500)
    })
}
function takeOutTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const takeOutTheTrash = true
            if (takeOutTheTrash)
                resolve("You take out the trash");
            else
                reject("You did not take out the trash")
        },500)
    })
}

walkDog().then(value => { console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores!")})
         .catch(error=> console.error(error))











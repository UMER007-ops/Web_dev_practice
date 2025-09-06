// Async/Await = Async = make a function return a promise
//               Await = make an async function wait for a promise
//               Allows you write asynchronous code in a synchronous manner
//               Async does not have resolve or reject parameters
//               Everything after await is placed in an event queue

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
            const cleanTheKitchen = true;
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

// Async/Await

async function doChores(){
    try{
        const walkTheDogresult = await walkDog()
        console.log(walkTheDogresult);

        const cleanTheKitchenResult = await cleanKitchen() 
        console.log(cleanTheKitchenResult);

        const takeOutTheTrashResult = await takeOutTrash();
        console.log(takeOutTheTrashResult);
        
        console.log("You completed all the chores!");
    }
    catch(error){
        console.error(error)
    }
}

doChores();



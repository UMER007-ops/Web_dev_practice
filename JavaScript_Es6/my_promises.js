const myPromise = new Promise ((resolved,rejected) => {
    const a = 2, b = 2;
    const c = a+b;
    if( c === 4 ){
        resolved(`yes! ${a} + ${b} = 4`);
    }else{
        rejected(`no! ${a} + ${b} != 4`);
    }
})

myPromise.then((m) => {
    console.log(m);
}).catch((err) => {
    console.log(err);
})


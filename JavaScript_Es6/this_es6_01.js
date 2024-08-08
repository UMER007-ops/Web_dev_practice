const person = {
    test() {
        setTimeout(function () {    // function keyword rebind this with the calling function
            console.log(this);
        },2000);
        setTimeout(()=>{            // arrow function never rebind this works according to the parent object
            console.log(this);
        },2000);
    }
}
person.test();
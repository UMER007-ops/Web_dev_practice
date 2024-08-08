const changeMe = function(){
    console.log("umer");
}
let intervalId;
document.querySelector('#start').addEventListener('click',function(){
    intervalId = setInterval(changeMe,1000);
})


document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(intervalId);
});




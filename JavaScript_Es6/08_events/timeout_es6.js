const sayUmer = function() {
    console.log("Umer");
}
const changeText = function() {
    document.querySelector('h1').innerHTML = "Best Js series"; 
} 

const changeHeading = setTimeout(sayUmer,2000);
const changeMe = setTimeout(changeText , 2000);

document.querySelector('#stopping').addEventListener('click',function(){
    clearTimeout(changeMe);
    console.log("stopped");
})







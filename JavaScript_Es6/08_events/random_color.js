const randomColor = () => {
    const hex = '123456789ABCDEF';
    let color = '#';
    for (let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
let intervalId;

const changeMe = () => {
    const changeBg = () => {
        document.body.style.backgroundColor = randomColor();
    }
    if(!intervalId){
        intervalId = setInterval ( changeBg , 1000)
    }
}
document.querySelector('#start').addEventListener('click',changeMe);


const stopChangingMe = () => {
    clearInterval(intervalId);
    intervalId = null;
}
document.querySelector('#stop').addEventListener('click', stopChangingMe);









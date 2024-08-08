// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.

function difference(num){
    return (num>19) ? 3*(Math.abs(num-19)) : Math.abs(19-num);
}

console.log(difference(30));

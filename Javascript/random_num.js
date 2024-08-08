// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  

var num=Math.ceil(Math.random()*10);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Guess a number: ', function(userInput) {
  if(userInput==num){
    console.log("Good work");
  }else{
    console.log("Better luck next time");
  }
  rl.close();
});






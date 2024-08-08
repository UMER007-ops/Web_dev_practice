// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. 

function check(num){
    return ((Math.abs(100-num)<=20) || (Math.abs(400-num)<=20)) ? true : false;
}

console.log(check(380));    //  return true because result is within 20
console.log(check(390));    //  return true because result is within 20
console.log(check(90));     //  return true because result is within 20
console.log(check(95));     //  return true because result is within 20
console.log(check(20));     //  return false because result is not within 20
console.log(check(320));    //  return false because result is not within 20
console.log(check(195));    //  return false because result is not within 20



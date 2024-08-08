function celcius_fahrenheit(cel){
    var fahr = ((cel/5)*9)+32;
    return fahr;
}
function fahrenheit_celcius(fahr){
    var cel=((fahr-32)/9)*5;
    return cel;
}

console.log(celcius_fahrenheit(60));
console.log(fahrenheit_celcius(45));


// 82. Write a JavaScript program to add two positive integers without carrying. 

function add_two_int_without_carrying(n1, n2) {
    
    var result = 0, // Initialize the result
        x = 1; // Initialize the multiplier

    // Iterate while both numbers have digits
    while (n1 > 0 || n2 > 0) {
        result += x * ((n1%10 + n2%10) % 10); // Add the current digit without carrying
        n1 = Math.floor(n1 / 10); // Move to the next digit in the first number
        n2 = Math.floor(n2 / 10); // Move to the next digit in the second number
        x *= 10; // Update the multiplier for the next digit place
    }

    return result; // Return the final result
}
console.log(add_two_int_without_carrying(30,19));




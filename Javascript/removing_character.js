// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

var str = "umer";
positionToRemove = 1;
console.log(str.slice(0,positionToRemove));  // This gives only u
console.log(str.slice(positionToRemove+1));  // This gives er

modified_str=str.slice(0,positionToRemove) + str.slice(positionToRemove+1);   // It giver uer and m is removed which is at position 1
console.log(modified_str);



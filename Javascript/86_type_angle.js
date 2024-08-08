// 86. Write a JavaScript program to find the types of a given angle.  
// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

function type_of_angle(angle){
    if(angle>0 && angle<90)
        return "Acute angle";
    else if(angle==90)
        return "Right angle";
    else if(angle>90 && angle<180)
        return "Obtuse angle";
    else if(angle==180)
        return "Straight angle";
    else
        return "Unknown";
}

let angle  = 190;

console.log(type_of_angle(angle));

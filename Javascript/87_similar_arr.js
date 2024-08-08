// 87. Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.

function check_arr(arra1, arra2) {
    // Iterate through elements of arra1
    for (var i = 0; i < arra1.length; i++) {
      // Nested loop to swap elements and check permutations
      for (var j = i; j < arra1.length; j++) {
        // Initialize result and temporary variable
        var result = true,
          temp = arra1[i];
  
        // Swap elements
        arra1[i] = arra1[j];
        arra1[j] = temp;
  
        // Compare elements of the modified arra1 with arra2
        for (var k = 0; k < arra1.length; k++) {
          if (arra1[k] !== arra2[k]) {
            result = false;
            break;
          }
        }
  
        // If the arrays match, return true
        if (result) {
          return true;
        }
  
        // Restore the original order by swapping back elements
        arra1[j] = arra1[i];
        arra1[i] = temp;
      }
    }
  
    // If no match is found, return false
    return false;
  }

let arr1 = [10,20,30];
let arr2 = [10.20,30];
console.log(check_arr(arr1,arr2));






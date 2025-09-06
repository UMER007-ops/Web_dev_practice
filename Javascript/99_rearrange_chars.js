// 99. Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string.

function check_rearrangement(str1, str2) {
  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");
  let result = true;
  if (sortedStr1.length !== sortedStr2.length)
    result=false
  else
    for (let i = 0; i < sortedStr1.length; i++) {
      if (sortedStr1[i] !== sortedStr2[i]) {
        result = false;
      }
    }
  return result;
}

console.log(check_rearrangement("xyz", "yxp"));

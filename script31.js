// Print the index of non - repeating character

function findNonRepeatingCharacter(string) {
  let repeat;
  for (let i = 0; i < string.length; i++) {
    repeat = false;
    for (let j = 0; j < string.length; j++) {
      if (string[i] === string[j] && i !== j) {
        repeat = true;
      }
    }
    if (repeat === false) {
      return i;
    }
  }
  return null;
}

a = "abbccda";
console.log(findNonRepeatingCharacter(a));

//palindrome check

function palindromeCheck(string) {
  let newStringToCompare = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newStringToCompare += string[i];
  }
  if (newStringToCompare === string) {
    return true;
  }
  return false;
}

console.log(palindromeCheck("abcba"));

// 2 method to check if palindrome

function palindromeCheck2(st) {
  let newSt = [];
  for (let i = st.length - 1; i >= 0; i--) {
    newSt.push(st[i]);
  }
  if (newSt.join("") === st) {
    return true;
  } else return false;
}
console.log(palindromeCheck2("abcdcba"));

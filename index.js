function isPalindrome(word) {
  // iterate to the middle of the word
  for (let i = 0; i < word.length / 2; i++) {
    // check corresponding letters from the end if they match
    const j = word.length - 1 - i;
    // if any letters don't match, return false
    if (word[i] !== word[j]) return false;
}
// return true if they match
  return true;
}

/* 
  Add your pseudocode here
  iterate from the beginning to the middle
    check each letter to the correponding letter from the end
      if any letters don't match, return false
          return true
*/


/*
  Add written explanation of your solution here
  This checks if the first letter is not the same us the last we get false and so on.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

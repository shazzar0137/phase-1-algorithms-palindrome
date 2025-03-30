 // Write your algorithm here
  function isPalindrome(word) {
    let left = 0;
    let right = word.length - 1;
    while (left < right) {
      if (word[left] !== word[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
   /* 
  Add your pseudocode here
*/
  // // Initialize two pointers
  // leftPointer = 0
  // rightPointer = length of word - 1

  // // Loop until the two pointers meet in the middle
  // WHILE leftPointer < rightPointer:
  //     // Compare characters at the two pointers
  //     IF word[leftPointer] is not equal to word[rightPointer]:
  //         RETURN false
  //     // Move the pointers towards the center
  //     leftPointer = leftPointer + 1
  //     rightPointer = rightPointer - 1

  // // If all characters matched, return true
  // RETURN true
  


/*
  Add written explanation of your solution here
  Initialize Pointers:
leftPointer starts at the beginning of the word (index 0).
rightPointer starts at the end of the word (index length of word - 1).
Loop Until Pointers Meet:
The loop runs as long as leftPointer is less than rightPointer.
Compare Characters:
Inside the loop, compare the characters at the positions pointed to by leftPointer and rightPointer.
Check for Mismatch:
If the characters do not match, return false immediately.
Move Pointers:
If the characters match, move leftPointer one step to the right and rightPointer one step to the left.
Return True:
If the loop completes without finding any mismatches, return true.
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

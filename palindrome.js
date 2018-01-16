// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//
// function palindrome (str){
//   const reversedString = str.split('').reverse().join('')
//   return reversedString === str ? true : false
// }

function reverseTheString (string) {
  return string.split('').reduce( (rev, currEl) => {
    return currEl + rev
  }, '')
}

function palindrome (str) {
  return str === reverseTheString(str)
}

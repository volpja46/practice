// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// wnt to remove spaces and punctuation

function cleanString (str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}



function (stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}



//
// anytime we find a char that is not a num, cap char or lowercase character
// replace it with '' nothing!
//  /w disregards any space or punctuation finds only characters

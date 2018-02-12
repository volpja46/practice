// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// BEST ANSWR
// turn into array with string.split('')
// want to reduce all values in array down to one string value!!!!
// reduce two args first is an arrow fn, & then a starting in value
// reduce( (rev, char) => {
  // return rev + char
// })
function reversed(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

function reverse(str) {
    return str.split('').reverse().join('');
};

function reverse(str){
  let reversed = ''
  for (let character of str) {
    reversed = character + reversed
  }
  return reversed;
}

module.exports = reverse;

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(n);
}

function reverseInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reduce((n, currEl) => {
      return currEl + n;
    }, "");
  return parseInt(reversed) * Math.sign(n);
}

// Math.sign returns 1 if positive, -1 if negative num
module.exports = reverseInt;

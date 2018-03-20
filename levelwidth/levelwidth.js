// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]


function levelWidth(root) {
  // create counter array width of tree @ each levels
  // create array to hold first node and 'stopper value'
  const arr = [root, 's'];
  const counters = [0]
// iterate thr arr..if 's' is only thing left GET ME OUTTA HERE
    while (arr.length > 1) {
    const node = arr.shift()
    // if we pull out s we want to incr counter and add 's' to end of array
    if (node === 's'){
      counters.push()
      arr.push('s')
      // else we are looking at an actual node
    } else {
      arr.push(...node.children)
      counters[counters.length - 1]++;
    }
  }
  return counters;
}
  }

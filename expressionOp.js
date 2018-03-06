

// // right rotation
// function rotation (k, arr, m) {
//   const newArray = arr.slice(0)
//   for (let i = 0; i < k; i++){
//   let newElement = newArray.pop()
//   newArray.unshift(newElement)
//     console.log(newArray[m])
//   }
// }


// // left rotation
// // function rotation (k, arr, m) {
// //   const newArray = arr.slice(0)
// //   for (let i = 0; i < k; i++){
// //   let newElement = newArray.shift()
// //   newArray.push(newElement)
// //   console.log(newArray)
// //   }
// //   return newArray[m];
// // }

// rotation(5, [1,2,3,5,66], 2)


// function gaming(a) {
//   var player = "Bob"
//   var newArray = a.slice(0)
//   for (let i = 0; i < newArray.length; i++) {
//     if (newArray.length > 0 && player === "Bob") {
//         player = "Andy"
//         var maximum = Math.max(...newArray)
//         var index = newArray.indexOf(maximum)
//         newArray = newArray.slice(index, newArray.length - 1)
//       } else if (newArray.length > 0 && player === "Andy") {
//         player = "Bob"
//         var maximum = Math.max(newArray)
//         var index = newArray.indexOf(maximum)
//         newArray = newArray.slice(index, newArray.length - 1)
//       }
//   }
//   return player.toUpperCase()
// }

// gaming([1, 0, 488, 2, 99])


function expressionOperator(string) {
  // find where there is a + or - ... then add the following two numbers
  // add numbers by themselves if they are not one or two places after + or
  // base case-- if we are at the end of the string-- return the total
  // go through expression & see where there are operators

  for (char of string ) {
    if (string.includes("+") && !string.includes("-")) {
      let newString = string.replace(/[^\w]/g, "");
      let result = newString.split('').map(function(item) {
          return parseInt(item, 10);
          });
      let realResult = result.reduce((total, num) => total + num);
      return realResult
    } else if (string.includes("-") && !string.includes("+")) {
       let newString = string.replace(/[^\w]/g, "");
       let result = newString.split('').map(function(item) {
          return parseInt(item, 10);
          });
     for (var i = 0; i < result.length; i++){
       if (result.length < 2) {
         return result[0] - result[1]
       }
        let firstNum = -result[0]
        return firstNum + (result[1] - result[2])
  }
  }
}
}


expressionOperator("+ 1 1");
// -1



function expressionOperator(string) {
  // go through expression & see where there are operators
  // create a new string & take out everything besides the numbers
  // change the numbers in the string to an array and turn them all into integers
  // add all the results together for addition
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

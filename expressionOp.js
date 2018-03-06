function expressionOperator(string) {
  // find where there is a + or - ... then add the following two numbers
  // add numbers by themselves if they are not one or two places after + or
  // base case-- if we are at the end of the string-- return the total
  // go through expression & see where there are operators
  let addThese = [];
  let subtractThese = [];

  for (var i = 0; i < string.length - 1; i++) {
    if (string.includes("+") && !string.includes("-")) {
      let newString = string.replace(/[^\w]/g, "");
      let result = newString.split('').map(function(item) {
          return parseInt(item, 10);
          });
      let realResult = result.reduce((total, num) => total + num);
      return realResult
    }
  }
}

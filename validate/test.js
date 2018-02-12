const Node = require("./node");
const validate = require("./index");

test("Validate recognizes a valid BST", () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);

  expect(validate(n)).toEqual(true);
});

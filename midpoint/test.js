const midpoint = require('./index');
const L = require('./linkedlist');
const Node = L.Node;
const LinkedList = L.LinkedList;

test('Midpoint is a function', () => {
  expect(typeof midpoint).toEqual('function');
});

describe('Midpoint returns the middle node of an odd numbered list', () => {
  test('when the list has 3 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    expect(midpoint(l).data).toEqual('b');
  });

  test('when the list has 5 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    l.insertLast('e');
    expect(midpoint(l).data).toEqual('c');
  });
});

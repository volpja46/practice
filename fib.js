function memoize (fn){
  // record of all previous calls to fib & results
const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    //  have not called this fn with this set of args before!
    // need to call that fn take result  & cache it in the result
    const result = fn.apply(this, args)
    // ^ result of calling fib fn below...use apply whenever passed an array of args
    cache[args] = result
    // { '7': 13 } .. arg passed in is 7...value at the key is 13
    return result;
  };
}

function fib (n) {
  if (n < 2) {
    return n;
    // will get fib(0) or fib(1)
  }
  return fib(n - 1) + fib(n - 2)
}

const fibT = memoize(fib)

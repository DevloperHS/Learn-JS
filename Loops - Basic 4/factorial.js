// Factorial

/* 
Taking in some integer value n, find the factorial for that number and return it.

A factorial is the product of all positive integers greater than 0 up to and including the factorial number n.
5! = 5 * 4 * 3 * 2 * 1 = 120
*/

function factorial(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

console.log(factorial(5)) // 120 -> 5*4*3*2*1 = 5!
// Summation
/*
 Complete the Summation

 write a function summation that will find the sum of all the values from 1 to (and including) n. 
 The value n is passed into our function.
*/

function summation(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

a = summation(5);
console.log(a); // 15 -> 1+2+3+4+5
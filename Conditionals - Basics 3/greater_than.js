// Greater Than

/*
Given two arguments, first and last, determine which one is greater.

If first is greater than last, return first!

If last is greater than first, return last!

If they are equal, do not return anything.
*/

function greater(first, last) {
  if (first > last) {
    return first;
  }
  if (last > first) {
    return last;
  } else {
    return undefined;
  }
}

console.log(greater(5,6)) // 6
console.log(greater(4,1)) // 4
console.log(greater(5,5)) // undefined
// update NotEqual function to also handle the case where a is equal to b.
// If a is not equal to b return true. Otherwise, return false.

function isNotEqual(a, b) {
  if (a !== b) {
    return true;
  } else {
    return false;
  }
}

console.log(isNotEqual(5, 7)) // true
console.log(isNotEqual(5, 5)) // false
console.log(isNotEqual(5, -5)) // false
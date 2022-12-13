// Reverse Check Equal
// complete the isNotEqual function!
// If a is not equal to b return true.

// next operator is the !== or the strict inequality operator.
// This operator will evaluate to true if the two values are not equal.

function isNotEqual(a, b) {
  if (a !== b) {
    return true;
  }
}

console.log(isNotEqual(5, 7)) // true
console.log(isNotEqual(5, 5)) // undefined
console.log(isNotEqual(5, -5)) // true 

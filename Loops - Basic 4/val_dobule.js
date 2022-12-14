// Top Double

/*
Complete the top double function to find the largest double for the value that is below the top.

Parameters (value, top)

Example:
topDouble(2, 100) returns 64 -> as 64 < 100 4


The goal is to double a value until just before it reaches a top.
Let's say our value is 2 and our top is 100. We would double it like so:

2, 4, 8, 16, 32, 64, 128
We start at 2, double to 4, 8, so on until 128. We recognize 128 is larger than our top 100 so we return 64. 
This is the top double for 2 before 100.
This one is a bit tricky!, one might double the value before realizing it is larger than top. 

---------------------
 
Solution:
Check for top and value difference for each iteration.
If it is larger, stop the iteration.
*/

function topDouble(value, top) {
  while (value < top - value) { //main solution logic
    value = value * 2;
    console.log(value);
  }
  return value;
}

ans = topDouble(2, 100)
console.log(ans) // long list of values dobuling until value<top 
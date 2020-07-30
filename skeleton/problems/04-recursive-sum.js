/***********************************************************************
Write a recursive function called `sum` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sum([1, 2, 3]); // => 6
sum([0, 1, -3]); // => -2
sum([1, 2, 3, 4, 5]); //=> 15
***********************************************************************/
// Base case: array.length === 0
// Recursive Case: arr[0] + sum(arr.slice(1))
function sum(arr) {
    let totalSum = 0;
    if (arr.length === 0) {
        return totalSum;
    }
    totalSum = arr[0] + sum(arr.slice(1));
    return totalSum;
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sum;
  
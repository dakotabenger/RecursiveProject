/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // => []
flatten([1, 2]); // => [1, 2]
flatten([1, [2, [3]]]); // => [1, 2, 3]
***********************************************************************/

//Base case: if !Array.isArray(arr)
//Recursive case:

function flatten(arr) {
    const newArray = [];
    arr.forEach(function(value){
        if (!Array.isArray(value)){
            newArray.push(value)
        } else {
            newArray.push(...flatten(value))
        }
    });
    return newArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;

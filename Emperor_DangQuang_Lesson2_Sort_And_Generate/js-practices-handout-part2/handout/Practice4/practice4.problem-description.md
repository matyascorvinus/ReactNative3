# Practice 4 - Functional Programming - Binary Search within an Array

## Problem Description

Write a function `binarySearch` that accept 2 parameters `input` and `target`:

```javascript
function binarySearch(input, target){
  // Your code here
}
```

The data parameter will accept objects in the form of:

```javascript
{
  "input" : [
    /*
     * An array containing unique integer numbers ranging from -10000 to 10000.
     * The array is sorted by ascending order.
     */
  ],
  "target" : // a number to search for within the array.
}
```

Example piece of data:

```javascript
{
  "input" : [-6795, -2462, -12, 0, 506, 7896, 10000],
  "target": 506
}
```

The objective of this practice is to write your own function `binarySearch(input, target)` so that for each `input` given, the function return the index of `target` within the array `input`: for the example data above, your function should return `4`.

If `target` is not found within `input`, your function should return -1.

Example function that will solve this problem:

```javascript
function binarySearch(input, target){
  return input.indexOf(target);
}
```

But, javascript's `indexOf` is a `for` loop that search through each element of the array in order to find the target, and doesn't take advantage of the fact that this array is already sorted.

Your task is to write an algorithm that best solve this particular problem: finding a number within this array using binary search.

## Requirements & Constraints

Additionally, your solution must be written in Functional Programming style:

- You are not allowed to use the keywords `var`, `let`, `if` or `switch`. Use the tenary operator for decision-making. All variables must be `const`.
- Loops (`for`, `while`) are also forbidden. Try to work with `map()`, `filter()`, `reduce()`. Create arrays with `Array.from()` instead of a loop.
- You are not allowed to mutate any variable (arrays are also objects). `push()`, `splice()` and other functions that mutate an array are to be avoided. When you want to mutate an object, create a new object instead (for example: DO NOT `return arr.sort()`, DO `return arr.slice().sort()` instead).

After you're done run `node test-practice1.js` to make sure the algorithm work correctly. After that submit the folder to your git repository for evaluation.

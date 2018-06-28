# Practice 5 - Functional Programming Part 2

## Problem Description

Refer to Practice 3 in previous session. In this practice, you will do the same `generate` function, but this time using Functional Programming.

## Requirement & Constraint

As with practice 1, you must solve this problem using Functional Programming code style:

- You are not allowed to use the keywords `var`, `let`, `if` or `switch`. Use the tenary operator for decision-making. All variables must be `const`.
- Loops (`for`, `while`) are also forbidden. Try to work with `map()`, `filter()`, `reduce()`. Create arrays with `Array.from()` instead of a loop.
- You are not allowed to mutate any variable (arrays are also objects). `push()`, `splice()` and other functions that mutate an array are to be avoided. When you want to mutate an object, create a new object instead (for example: DO NOT `return arr.sort()`, DO `return arr.slice().sort()` instead).

After you're done run `node test-practice2.js` to make sure the algorithm work correctly. After that submit the folder to your git repository for evaluation.
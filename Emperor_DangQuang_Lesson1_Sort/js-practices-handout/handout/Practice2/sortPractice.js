'use strict';

// to create MAX  array 




function sort(input) {
 // return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
    var array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
        (function heap_root(input, i) {
            var left = 2 * i + 1;
            var right = 2 * i + 2;
            var max = i;

            if (left < array_length && input[left] > input[max]) {
                max = left;
            }

            if (right < array_length && input[right] > input[max]) {
                max = right;
            }

            if (max !== i) {
                (function swap(input, index_A, index_B) {
                    var temp = input[index_A];

                    input[index_A] = input[index_B];
                    input[index_B] = temp;
                })(input, i, max);
                heap_root(input, max);
            }
        })(input, i);
    }

    for (i = input.length - 1; i >= 0; i--) {
        (function swap(input, index_A, index_B) {
            var temp = input[index_A];

            input[index_A] = input[index_B];
            input[index_B] = temp;
        })(input, 0, i);
        array_length--;


        (function heap_root(input, i) {
            var left = 2 * i + 1;
            var right = 2 * i + 2;
            var max = i;

            if (left < array_length && input[left] > input[max]) {
                max = left;
            }

            if (right < array_length && input[right] > input[max]) {
                max = right;
            }

            if (max !== i) {
                (function swap(input, index_A, index_B) {
                    var temp = input[index_A];

                    input[index_A] = input[index_B];
                    input[index_B] = temp;
                })(input, i, max);
                heap_root(input, max);
            }
        })(input, 0);
    }

    return input;
   
}

module.exports = sort


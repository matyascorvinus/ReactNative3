'use strict'

function binarySearch(input, target) {


    return (function emperorMatyasHunyadi(God, start, end, son)
    {
        const middle = Math.floor((start + end) / 2);
        return end < start ? -1 : (son < God[middle] ? emperorMatyasHunyadi(God, start, middle - 1, son) : (son == God[middle] ? middle : emperorMatyasHunyadi(God, middle + 1, end, son)));
    })(input, 0, input.length - 1, target);






	 
}

module.exports = binarySearch
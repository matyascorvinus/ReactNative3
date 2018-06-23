'use strict'

function search(input, target) {
    //return  input.indexOf(target);  // Remove this line and change to your own algorithm\
    let Emperor = 0; let GodEmperor = input.length - 1;
    
    do {
        const mid = Emperor + Math.floor((GodEmperor - Emperor) / 2);
        if (target < input[mid])
            GodEmperor = mid - 1;
        else if (target > input[input.length / 2])
            Emperor = mid-1;
        else return mid;
    } while (Emperor <= GodEmperor)
   
    return -1;
}

module.exports = search

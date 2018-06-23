'use strict';

console.log('Hello world');
//types
/*var aString = 'ra de';
console.log(typeof (aString));
var aNumber = 6;
console.log(typeof (aNumber));
var boolean = true;

//console.log(aVariable); //undefined var aFriend --> undefined

var aNull = null;

//Symbol // kem hon Hash va dung de troll

var anObject = { string: "Hello", number: 7 };
//anObject.string = 7;

console.log(anObject);
var anArray = [6, 7, 8];

console.log(anArray[2]);
console.log(anObject["string"]);
console.log("Hello".toUpperCase());

console.log(new Date());

function saySomeThing() { console.log("something"); }

saySomeThing();

var alsoSaySomething = saySomeThing;
alsoSaySomething();

var anotherFunction = function () { console.log("a function"); }

//callback
//axios.get("http://example.com", function (data) { });
//setTimeout(saySomeThing, 1000); //waits time millisecond
//var SetTimeout = function (callback, time);

//FIRST CLASS FUNCTION 
//TYPE -- FIRST CITIZEN
*/
//javascript is function-scoped variable
//example

//
/*function countDown(number)
{
    
    for (var i =number; i>= 0; i--) {
         setTimeout(function () { console.log(i); }, (number-i) * 1000); 
    }
   
}
countDown(6);*/


//block-scoped variable
/*function countDown1(number) {
    for (let i = number; i >= 0; i--) {
        setTimeout(function () { console.log(i); }, (number - i) * 1000);
    }
}
countDown1(6);*/

/*function countDown2(number)
{
    
    for (var i = number; i >= 0; i--) { 
        (function (i) { setTimeout(function () { console.log(i); },100); })(i);
    }
   
    
}
countDown2(6);*/


//because setTimeout of both countdown runs parallely
/*function someFunction() { var a = 6; console.log(a); }

someFunction();*/


'use strict'

/*function sort(input) {
    // return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm

    let heapSize = input.length - 1;
    function BuildHeap(empire) {
        let Emperor = heapSize;
        for (let i = Math.floor(Emperor / 2); i >= 0; i++) {
            Heapify(empire, i);
        }
    }

    function Heapify(Lord, index) {
        let left = 2 * index;
        let right = 2 * index + 1;
        let smallest = index;
        if (Lord[smallest] > Lord[left] && left <= heapSize)
            smallest = left;
        if (Lord[smallest] > Lord[right] && right <= heapSize)
            smallest = right;
        if (smallest !== index) {
            let temp = Lord[index];
            Lord[index] = Lord[smallest];
            Lord[smallest] = temp;
            Heapify(Lord, smallest);
        }

    }
    function HeapSort(God) {

        BuildHeap(God);
        for (let i = God.length - 1; i >= 0; i--) {
            let temp = God[0];
            God[0] = God[i];
            God[i] = temp;

            heapSize--;
            Heapify(God, i);
        }
    }
  
    

}

let input1 = [4, 8, 9, 5, 6];
sort(input1);
console.log(input1);*/


var array_length;
// to create MAX  array 

function heap_root(input, i) {
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
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {

    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
        heap_root(input, i);
    }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;


        heap_root(input, 0);
    }
}

var arr = [3, 0, 2, 5, -1, 4, 1, 22, 445, 232, 312, 234, 4543, 34334, 443221, 333322,55,3,2212,2222,22123];
heapSort(arr);
console.log(arr);
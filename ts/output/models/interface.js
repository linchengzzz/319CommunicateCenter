"use strict";
function getCounter() {
    var counter = function (start) {
        console.log(start);
    };
    counter.interval = 22;
    counter.reset = function () { };
    return counter;
}
var cont = getCounter();
cont(10);
cont.interval = 22;
cont.reset();
console.log(cont);

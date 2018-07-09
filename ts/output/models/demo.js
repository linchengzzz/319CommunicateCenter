"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Demo = (function () {
    function Demo(a, b) {
        this.a = a;
        this.b = b;
    }
    Demo.prototype.sum = function () {
        return this.a + this.b;
    };
    return Demo;
}());
exports.Demo = Demo;

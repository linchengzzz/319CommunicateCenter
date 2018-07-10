"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var demo_2_1 = require("./models/demo.2");
console.log(demo_2_1.default({
    firstName: '张',
    lastName: '成林',
    age: 123,
}));
const str = '1234555';
console.log(str.search(/5{3}/));
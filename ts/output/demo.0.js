"use strict";
var NewPerson = (function () {
    function NewPerson(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    return NewPerson;
}());
function greet(person) {
    console.log("hello " + person.name + "," + person.age);
}
var person = new NewPerson('zh', 20, 180);
greet(person);

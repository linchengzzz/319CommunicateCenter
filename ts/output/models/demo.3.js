var Student = (function () {
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "hello," + person.firstName + " " + person.lastName;
}
var user = new Student('张', '成林', 22);
console.log(greeter(user));

class Student {
    public fullName: String;
    constructor(public firstName: String,public lastName: String,public age: Number) {
        this.fullName = `${firstName} ${lastName}`;
    }
}
interface Person {
    firstName: String;
    lastName: String;
}
function greeter(person: Person) {
    return `hello,${person.firstName} ${person.lastName}`;
}
const user = new Student('张','成林',22);
console.log(greeter(user));

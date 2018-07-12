// class Animal1 {
//     private name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
// class Rhino extends Animal1 {
//     constructor() {
//         super('Rhino');
//     }
// }
// class Employee {
//     private name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
// let animal = new Animal1('Goat');
// let rhino = new Rhino();
// let employee = new Employee('Bob');
// rhino = animal;
// console.log(animal, rhino, employee);
// class Person1{
//     protected name: string;
//     protected constructor(name: string){
//         this.name = name;
//     }
// }
// class Employee extends Person1 {
//     private department: string;
//     constructor(name: string,department: string){
//         super(name);
//         this.department = department;
//     }
//     public getElevatorPitch(){
//         return `hello,my name is ${this.name} and I work in ${this.department}`;
//     }
// }
// const howard = new Employee('howard','Sales');
// const john = new Person1('john');
// console.log(howard.getElevatorPitch());
// console.log(howard.name);
// class Octopus {
//     readonly name: string;
//     readonly number: number = 8;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
// const dad = new Octopus('1123');
// dad.name ='123'
// class Animal {
//     constructor(private name: string) {}
// }
//
// const passcode = "secret passcode";
// class Employee {
//     private _fullName: string;
//     get fullName(): string {
//         return this._fullName;
//     }
//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         } else {
//             console.log("error");
//         }
//     }
// }
// const employee = new Employee();
// employee.fullName = "bob";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }
// class Grid {
//     static origin = { x: 0, y: 0 };
//     constructor(public scale: number) {}
//     calculateDistanceFromOrigin(point: { x: number; y: number }) {
//         const xDist = point.x - Grid.origin.x;
//         const yDist = point.y - Grid.origin.y;
//         return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//     }
// }
// const grid1 = new Grid(1.0);
// const grid2 = new Grid(5.0);
// console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// abstract class Animal {
//     abstract makeSound(): void;
//     move(): void {
//         console.log("hello");
//     }
// }
// abstract class Department {
//     constructor(public name: string) {}
//     printName(): void {
//         console.log('Department name:' + this.name);
//     }
//     abstract printMeeting(): void;
// }
// class AccountingDepartment extends Department {
//     constructor() {
//         super('Accounting adn Auditing');
//     }
//     printMeeting(): void {
//         console.log('The Accounting Department meets each Monday at 10am.');
//     }
//     generateReports(): void {
//         console.log('Generating accounting reports...');
//     }
// }
// let department:Department;
// department = new Department();
// department = new AccountingDepartment();
// department.printName();
// department.printMeeting();
// department.generateReports();
// class Greeter {
//     static standardGreeting = "Hello, there";
//     greeting: string;
//     greet() {
//         if (this.greeting) {
//             return "Hello, " + this.greeting;
//         }
//         else {
//             return Greeter.standardGreeting;
//         }
//     }
// }

// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());

// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = "Hey there!";
// console.log(typeof Greeter);
// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet());
// let myAdd: (x: number, y: number) => number = (x: number, y: number): number =>
//     x + y;
// console.log(myAdd(10, 20));
// interface Card {
//     suit: string;
//     card: number;
// }
// interface Deck {
//     suits: string[];
//     cards: number[];
//     createCardPicker(this: Deck): () => Card;
// }
// let deck: Deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     // NOTE: The function now explicitly specifies that its callee must be of type Deck
//     createCardPicker: function(this: Deck) {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);

//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
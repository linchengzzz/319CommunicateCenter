// interface Label {
//     label: string;
// }
// function printLabel(labelObj: Label): void {
//     console.log(labelObj.label);
// }
// const myObj = { size: 10, label: 'size 10 label' };
// printLabel(myObj);
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }
// function createSquare(config: SquareConfig): { color: string; area: number } {
//     const newSquare: { color: string; area: number } = {
//         color: 'black',
//         area: 100,
//     };
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
// const mySquare = createSquare({ color: 'white' });
// console.log(mySquare);
// interface Square {
//     length?: number;
//     width?: number;
// }
// function createSquare(config: Square = {}): number {
//     const curSquare: Square = {
//         length: 100,
//         width: 100,
//     };
//     config.length && (curSquare.length = config.length);
//     config.width && (curSquare.width = config.width);
//     return <number>curSquare.length * <number>curSquare.width;
// }
// console.log(createSquare());
// readonly
// interface Point {
//     readonly x:number;
//     readonly y:number;
// }
// let p0:Point ={x:10,y:20};
// console.log(p0);
// p0.x = 30; //error
// readonlyArray
// let ary: Array<number> = [1, 2, 3];
// const readonlyAry:ReadonlyArray<number> = [1,2,3];
// // readonlyAry[0] = 1;// error
// console.log(readonlyAry);
// let a = [2]
// a = <number[]> readonlyAry;
// console.log(a);
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//     const newSquare: { color: string; area: number } = {
//         color: 'black',
//         area: 100,
//     };
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
// const myObj = { width: 100,opacity:0.6 };
// let mySquare = createSquare(myObj);
// console.log(mySquare);
//  function
// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
// const mySearch: SearchFunc = function(src,sub) {
//     const result = src.search(sub);
//     return result > -1;
// };
// interface StringArray {
//     [index:string]:string;
// }
// const myArray: StringArray ={str:'str2'};
// const str:string = myArray['str'];
// console.log(str);
// class Animal {
//     name:string;
// }
// class Dog extends Animal {
//     breed: string;
// }
// interface NotOkey {
//     [x:string]:Animal;
//     [y:number]:Dog;
// }
// interface NumberDictionary {
//     [index: string]: number;
//     length:number;
//     name:string;
// }
// interface ReadonlyStringArray {
//     readonly [index:number]:number;
// }
// const myArray:ReadonlyStringArray = [1,2,3,4,5];
// myArray[3] =6;// error
// interface TimeInterface {
//     currentTime: Date;
//     setTime(d: Date): void;
//     print():void;
// }

// class Time implements TimeInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     print (){
//         console.log(this.currentTime);
//     }
//     constructor(y: number, m: number, d: number) {
//         this.currentTime = new Date(`${y}=${m}-${d}`);
//     }
// }

// const myDate = new Time(2018,5,21);
// const newDate = new Date();
// myDate.print();
// myDate.setTime(newDate);
// myDate.print();
// interface ClockConstructor {
//     new (hour:number,minute:number):ClockConstructor;
// }
// class Clock implements ClockConstructor {
//     constructor(h:number,m:string){}
// }
// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     print(): void;
// }
// function createClock(ctor: ClockConstructor, hour: number, minute: number) {
//     return new ctor(hour, minute);
// }
// class DigitalClock implements ClockInterface {
//     constructor(public h: number, public m: number) {}
//     print() {
//         console.log(this.h, this.m);
//     }
// }
// class AnalogClock {
//     constructor(h: number, m: number) {}
// }
// const digital = createClock(DigitalClock, 12, 17);
// digital.print();
// interface Shape {
//     color: string;
// }
// interface Square extends Shape{
//     length:number;
// }
// interface area extends Shape {

// }
// interface area2 extends Shape,Square{
//     area: number;
// }
// const square:area2 = {area:100,color:'black',length:100};
// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }
// function getCounter(): Counter {
//     const counter = <Counter>function(start: number) {
//         console.log(start);
//     };
//     counter.interval = 22;
//     counter.reset = function() {};
//     return counter;
// }
// const cont = getCounter();
// cont(10);
// cont.interval = 22;
// cont.reset();
// console.log(cont);
// extends class
// class Control {
//     private state: any;
    
// }
// interface SelectableControl extends Control {
//     select(): void;
// }
// // 只有control 的子类在可以实现selectableControl接口
// class Button extends Control implements SelectableControl {
//     select(){};
//     constructor(){
//         super();
//     }
// }
// class TextBox extends Control {
// }
// class Images implements SelectableControl {
//     select(){};
// }

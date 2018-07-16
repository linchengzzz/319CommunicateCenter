// type Alias = { num: number }
// interface Interface {
//     num: number;
// }
// declare function aliased(arg: Alias): Alias;
// declare function interfaced(arg: Interface): Interface;
// function foo(x: number) {
//     if (x !== 1 || x !== 2) {
//         //         ~~~~~~~
//         // Operator '!==' cannot be applied to types '1' and '2'.
//     }
// }
// type Shape = Square | Rectangle | Circle | Triangle;
// function area(s: Shape) {
//     switch (s.kind) {
//         case "square": return s.size * s.size;
//         case "rectangle": return s.height * s.width;
//         case "circle": return Math.PI * s.radius ** 2;
//     }
//     // should error here - we didn't handle case "triangle"
// }
// function area(s: Shape): number { // error: returns number | undefined
//     switch (s.kind) {
//         case "square": return s.size * s.size;
//         case "rectangle": return s.height * s.width;
//         case "circle": return Math.PI * s.radius ** 2;
//         default: return 0;
//     }
// }
// function pluck<T, K extends keyof T>(o: T, name: K): T[K] {
//     return o[name];
// }
// interface Person1 {
//     name: string;
//     age: string;
// }
// const person: Person1 = {
//     name: 'Jarid',
//     age: '35',
// };
// const strings: string = pluck(person, 'name');
// console.log(strings);
// interface Map<T> {
//     [key: string]: T;
// }
// let keys: keyof Map<number>; // string
// let value: Map<number>['foo']; // number
// type Readonly1<T> = { readonly [P in keyof T]: T[P] };
// type Partial1<T> = { [P in keyof T]?: T[P] };

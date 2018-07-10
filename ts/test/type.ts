// 枚举
// enum Color {Red=2, Green, Blue};
// const C:Color = Color.Green
// console.log(Color)
// any
// let num: Object = 123;
// num = true;
// console.log(num);
// num.ifItExists();
// console.log(typeof num)
// void
// function fn(): void {
//     console.log('void');
// }
// let un: void = undefined;
// console.log(un);
// function fn() {
//     while(true){

//     }
// }
// fn()
// 类型断言
// let value: any = 'value';
// let strLength: number = (value as string).length;
// console.log(strLength);
// fn
// function foo() {
//     // okay to capture 'a'
//     return a;
// }

// // 不能在'a'被声明前调用'foo'
// // 运行时应该抛出错误
// foo();

// let a;
// function f(condition, x) {
//     if (condition) {
//         let x = 100;
//         return x;
//     }

//     return x;
// }

// console.log(f(false, 0));// returns 0
// console.log(f(true, 0));  // returns 100
// 解构
// function fn([first, second]: [number, number]) {
//     console.log(first + second);
// }
// fn([12,123])
// 重命名
// let obj = {
//     a: 123,
//     b: 456,
// };
// console.log(obj);
// let { a: number1, b: number2 } = obj;
// console.log(number1, number2);
// function fn(fns: { a: string; b?: string }) {
//     let{a,b='3'} = fns;
//     console.log(a,b);
// }
// fn({ a: '1' });
// function f({ a, b = 0 } = { a: "" }): void {
//     // ...
//     console.log(a,b);
// }
// // f({ a: "yes" }); // ok, default b = 0
// // f(); // ok, default to {a: ""}, which then defaults b = 0
// f({a:'123',b:456});
// function type(labelObj: { label: string }) {
//     console.log(labelObj.label);
// }
// let myObj = {size:10,label:'size'};
// type(myObj);
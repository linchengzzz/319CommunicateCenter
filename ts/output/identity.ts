// function identity<T>(arg: T):T {
//     return arg;
// }

// const output = identity<string>('123');
// console.log(8%(-5));
// function loggingIdentity<T>(arg: Array<T>): Array<T> {
//     console.log(arg.length);
//     return arg;
// }
// let myIdentity: { <T>(arg: T): T } = <T>(arg: T): T => arg;
// console.log(myIdentity<number>(123));
interface GenericIdentityFn<T> {
    (arg: T): T;
}
function identity<T>(arg: T): T {
    return arg;
}
const myIdentity: GenericIdentityFn<string> = <T>(arg: T) => arg;

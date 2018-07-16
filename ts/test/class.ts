// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }
// const myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = (x: number, y: number) => x + y;
// console.log(myGenericNumber.add(10, 20));

// interface Lengthwise {
//     length: number;
// }
// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }
// loggingIdentity({length:123,b:456});
// function create<T>(c: { new (): T }): T {
//     return new c();
// }
// class BeeKeeper {
//     hasMask: boolean;
// }
// class ZooKeeper {
//     nametag: string;
// }
// class Animal {
//     numLegs: number;
// }
// class Bee extends Animal {
//     keeper: BeeKeeper;
// }
// class Loin extends Animal {
//     keeper: ZooKeeper;
// }
// function createInstance<A extends Animal>(c: new () => A): A {
//     return new c();
// }
// createInstance(Loin).keeper.nametag;
// createInstance(Bee).keeper.hasMask;

let ary = [1, 2, 3, 4, 5];
console.log(ary);
ary = [...ary.splice(3, 1), ...ary];
console.log(ary);
console.log(typeof typeof null);
var un;
console.log(null == null);
console.log(NaN == NaN);
console.log(1 / 0);
console.log(0 / 0);
console.log(isFinite(Number.MAX_VALUE + Number.MAX_VALUE));
const obj = {
    1: 1,
    2: 2
};
const ary = [1, 2, 'a', 4, 5];
console.log(Number(ary));
console.log(parseInt('010', 8));
var str = '。我';
console.log(str, str.length);
const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: 2,
        e: {
            f: 2
        }
    }
};
const obj2 = { ...obj1 };
obj2.a = 3;
console.dir(obj1);
console.dir(obj2);

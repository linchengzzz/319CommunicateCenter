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
var num = 1;
console.log(++num + num++ + ++num + num++);
var str = '123';
console.log(++str);
console.log(+0 - +0);
var i = 0;
star: for (; i < 10; i++) {
    if (i < 5) {
        break star;
    }
    continue;
}
console.log(i);
console.log(10 ** 2);
const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
};
const obj2 = clone(obj1);
obj2.b.c = 8;
obj2.a = 10;
console.log(obj1, obj2);
function clone(obj) {
    var res = obj instanceof Array ? [] : {};
    for (var k in obj) {
        res[k] = typeof obj[k] === Object ? clone(obj[K]) : obj[k];
    }
    return res;
}
const ary = [1, 2, 4];
console.log(ary.join('|'));
var reg = /123/;
var str = '123456';
reg.exec(str);
console.log(RegExp["$'"]);
function outer() {
    inner();
}
function inner() {
    console.log(arguments.callee.caller);
}
outer();

for (let index = 0; index < 100; index++) {
    console.log((Math.random() * 5).toFixed(2));
}
var num = 10;
console.log(num.toExponential(1));
var ary = [1, 2, 3];
console.log(ary.splice(0, 2).length);
var ary = 'ccacuiydduiy';
console.log(ary.match(/uiy/));
var ary = [2, 1, 5, 6, 3];
console.log(Math.max(...ary));
var name = 'The Window';
var object = {
    name: 'My Object',
    getName: function() {
        return this.name;
    }
};
console.log(object.getName());
console.log((object.getName)());
console.log((object.getName = object.getName)());

var num = 100
typeof num // => number

var str = '今天天气不错'
var str2 = "明天天气也不错"
typeof str // => string

var t = true
var f = false
typeof t // => boolean

var n = null;
typeof n // => object

var ud
typeof un // => undefined

var person = {
    name: 'chenglin',
    age: 22,
    say: function () {
        console.log('hello')
    }
}
typeof person // => object

const reg = /\?id=(\d+)/
console.log(
    reg.exec('http://h5-1.beta.hqq.vip/#/banner10todetail?id=77&platform_type=Android&uid=136001&zone_id=110100')
);
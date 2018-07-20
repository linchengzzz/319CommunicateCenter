// (function() {
//     with (this) {
//         return _h(_e('div', { staticAttrs: { id: 'app' } }), [
//             _h(_e('h1'), ['Hello ' + _s(who)])
//         ]);
//     }
// })();
// const a = {};
// a.name = 'zcl';
// a.age = 22;
// console.log(a.name);
// console.log(a.age);
// with(a){
//     console.log(name);
//     console.log(age);
// }
var obj = { key: 'string' };
var tmp;
var n = 1e6;

console.time('no with');
for (var i = 0; i < n; i++) {
    tmp = obj.key;
}
console.timeEnd('no with');

console.time('with');
with (obj) {
    for (var i = 0; i < n; i++) {
        tmp = key;
    }
}
console.timeEnd('with');

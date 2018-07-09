// false => 0 '' false undefined null
// null undefined =>typeof null undefined
// let value = null;
// console.log(value ?? '100');
import test from 'ava';
test('should ', (test) => {
    let value = false;
    console.log(value ?? '100');
    test.pass();
});

// vue | toString
// 123 | '123' | '12' | '21'
// let value = 123;
// value | toString | console.log;
import test from 'ava';
test('should ', (test) => {
    let value = 123;
    value |> ((num) => num.toFixed(2)) |> ((num) => num.toString()) |> ((str) => str.slice(1,3)) |> console.log;
    test.pass();
});

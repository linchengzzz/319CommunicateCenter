// vue | toString
// 123 | '123' | '12' | '21'
// let value = 123;
// value | toString | console.log;
import test from 'ava';
test('should ', (test) => {
    let value = 20180103
    value |> num => num.toFixed(2) |> num => num.toString() |> str => str.slice(1)
    test.pass()
});
// const data ={ƒ
//     detail:{
//         user0:{
//             name:{
//                 firstName:'张', // => 李
//                 lastName:''
//             },
//             favorite:{

//             }
//         },
//         user1:{

//         }
//     }
// }
// this.setDate({
//     detail:this.data.
//     // detail:{
//     //     user0:{
//     //         name:{
//     //             firstName:'李'
//     //         }
//     //     }
//     }
// })
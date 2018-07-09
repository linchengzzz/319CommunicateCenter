// ECMAScript
// TODO 2015 2016 2017 2018
// ? async / await => stage-0 stage-1..stage-4 
// babel
import test from 'ava';
test('should', test => {
    const data = {
        user:{
            name:{
                lastName:'成林'
            }
        }
    }
    console.log(data?.user?.name?.lastName);
    test.pass()
})


// console.log(data&&data.user&&data.user.name&&data.user.name.lastName);
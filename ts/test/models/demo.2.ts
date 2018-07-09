interface Name {
    firstName: string,
    lastName: string,
    age:Number,
}

function person(name:Name){
    return `hello,${name.firstName} ${name.lastName},我今年${name.age}岁`;
}

export default person;
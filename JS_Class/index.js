class Person {
    name
    gender
    age

    constructor(name1, gender1, age1){
        this.name = name1
        this.gender = gender1
        this.age = age1
    }

    displayInfo() {
        return this.name + '-' + this.gender + '-' + this.age;
    }
}

const Person = new Person(name1:"Linh",gender1:"Female",age1: 39)
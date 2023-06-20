// 1 class cơ bản gồm tên và thuộc tính
class Person { // teencuara class
    _name 
    _gender
    _age // thuộc tính của class

    constructor(name, gender, age) { //trong class không cần dùng "function" để khai báo function
        this._name = name //đang trỏ đến biến "name" là thuộc tính name của class Person
        this._gender = gender
        this._age = age
    }

    displayInfo() {
        return this._name + "-" + this._gender + "-" + this._age;
    }
}

const person = new Person()
console.log(person.displayInfo());
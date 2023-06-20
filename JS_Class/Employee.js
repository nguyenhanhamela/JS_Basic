const Person = require('./Person')

// Extends là từ khoá dùng để class hiện tại sẽ kế thừa toàn bộ property, method với khả năng truy cập là public của class cha
// Employee ở class con, Person là class cha
class Employee extends Person {
  constructor(citizenIdentification, name, gender, age, code) {
    // super dùng để gọi đến method constructor trong class cha (Person) của nó
    super(citizenIdentification, name, gender, age);
    this.code = code
  }

  getCode() {
    return this.code
  }

  setAge(code) {
    this.code = code
  }

  // Đây là overriding method (ghi đè phương thức), sử dụng khi class con kế thừa từ class cha vè muốn định nghĩa lại
  // phương thức đã có mặt ở class cha
  displayInfo() {
    // super dùng để gọi đến method displayInfo trong class cha (Person) của nó
    return `${super.displayInfo()} - ${this.code}`
  }
}

module.exports = Employee

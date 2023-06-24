// Mục đích của việc viết class
// 1. Xây dựng và quản lý đối tượng và các phương thức liên quan
// 2. Hướng đối tượng: cho phép tạo ra các đối tượng độc lập với các thuộc tính và phương thức riêng biệt
// 3. Giúp tăng tính sắp xếp, tái sử dụng và duy trì mã nguồn
// 4. Tính kế thừa: có thể tạo ra các lớp con dựa trên một lớp cha đã tồn tại giúp việc chia sẻ
// và mở rộng source code hiện có, tiết kiệm thời gian và công sức

const Person = require('./Person')
const Employee = require('./Employee')

// Khởi tạo đối tượng person1 bằng constructor
const person1 = new Person('012345678998', 'Quang', 'Male', 26)
console.log('Person 1: ' + person1.displayInfo())

// Khởi tạo đối tượng person2 bằng setter
const person2 = new Person()
person2.setCitizenIdentification('01357924681')
person2.setName('Tester')
person2.setGender('Female')
person2.setAge(22)
console.log('Person 2: ' + person2.displayInfo())

// Khởi tạo đối tượng employee
const employee = new Employee('012345678998', 'Quang', 'Male', 26, 'NV000352')
console.log('Employee: ' + employee.displayInfo())


person1.setAddress('Hanoi')

// Kết quả là undefined do address có access modifier là private, ko thể truy cập trực tiếp
console.log('Value of property address: ' + person1.address)

// Để lấy được giá trị của address, phải thông qua hàm getter của thuộc tính address
console.log('Value of property address through getter method: ' + person1.getAddress())

// Kết quả lấy được giá trị của name do name có access modifier là public, có thể truy cập trực tiếp
console.log('Value of property name: ' + person1.name)

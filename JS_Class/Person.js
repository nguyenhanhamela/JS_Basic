// Lớp là một khuôn mẫu, được sử dụng để tạo đối tượng có thuộc tính (property) và phương thức (method)
// Class trong JS có 2 loại access modifier: public và private

class Person {
  // Property có access modifier là public
  citizenIdentification
  name
  gender
  age

  // Property có access modifier là private (thêm dấu # ở trước)
  #address

  // Constructor là hàm khởi tạo luôn được gọi đến khởi tạo 1 đối tượng mới, dùng để khởi tạo các thuộc tính của đối tượng
  // và hàm này ko có kiểu trả về
  constructor(citizenIdentification, name, gender, age) {
    this.citizenIdentification = citizenIdentification
    this.name = name
    this.gender = gender
    this.age = age
  }

  // Trường hợp ko viết constructor có tham số như trên, class vẫn có constructor mặc định như sau:
  // constructor() {
  // }

  // Ngoài hàm constructor để khởi tạo các thuộc tính, có thể sử dụng các hàm getter / setter để khởi tạo thuộc tính
  // Getter
  getCitizenIdentification() {
    return this.citizenIdentification
  }

  // Setter
  setCitizenIdentification(citizenIdentification) {
    this.citizenIdentification = citizenIdentification
  }

  // Getter
  getName() {
    return this.name
  }

  // Setter
  setName(name) {
    this.name = name
  }

  // Getter
  getGender() {
    return this.gender
  }

  // Setter
  setGender(gender) {
    this.gender = gender
  }

  // Getter
  getAge() {
    return this.age
  }

  // Setter
  setAge(age) {
    this.age = age
  }

  getAddress() {
    return this.#address
  }

  setAddress(address) {
    this.#address = address
  }

  // Function trong class được gọi là method (ko cần phải viết từ khoá function ở trước)
  displayInfo() {
    return `${this.citizenIdentification} - ${this.name} - ${this.gender} - ${this.age}`
  }

  // Trường hợp viết thêm method có cùng tên thì trong JS sẽ gọi đến function ở sau,
  // do class trong JS ko có khái niệm overloading method (nạp chồng phương thức)
  // displayInfo(nationality) {
  //   return nationality
  // }
}

module.exports = Person

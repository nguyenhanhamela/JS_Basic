
    // tạo obj memberInfo có thuộc tính: age 30, gender female, company Amela
    const memberInfo = {
        "age":30,
        "gender":"female",
        "company":"Amela"
    }
// truy cập vào thuộc tính của đối tượng
// đối tượng -> memberInfo.thuộc tính -> age/gender/company
// console.log(memberInfo.age);
// console.log(memberInfo.gender);

//lặp qua thuộc tính của 1 đối tượng
let arrayInfo = []
for (let i in memberInfo) {
    arrayInfo.push(memberInfo[i])
}
console.log(arrayInfo);

// lấy các thuộc tính của memberInfo vào 1 mảng
let arrayProperties = []
for (let i in memberInfo){
    arrayInfo.push(memberInfo[i])
}
console.log(arrayInfo);

//lấy các thuộc tính của memberInfo vào 1 mảng
const keyMember = Object.keys(memberInfo)
console.log(keyMember);

//dùng Object.value để lấy ra giá trị của mỗi thuộc tính lưu vào 1 mảng
const valueMember = Object.values(memberInfo)
console.log(valueMember);
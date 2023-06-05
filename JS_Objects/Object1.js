// Đề: Tạo ob member infor có các thuộc tính age, gender, company
const memberInfor = {
"age": 23,
"gender": "female",
"company": "amela"
}
console.log(memberInfor.age); // truy cập vào thuộc tính của đối tượng
console.log(memberInfor.gender);

let arrInfor = [];
for (let i in memberInfor){
    arrInfor.push(memberInfor[i])
}
console.log(arrInfor);


//lấy các thuộc tính của object memberInfor

const keyMember = Object.keys(memberInfor)
console.log(keyMember)

//dùng object.values để lấy ra giá trị của mỗi thuộc tính lưu vào 1 mảng 
 const valueMember = Object.values(memberInfor)
console.log(valueMember)



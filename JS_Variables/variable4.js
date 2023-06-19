// Data types
// Number:  int, float (Để kiểm tra kiểu dữ liệu dùng lệnh typeof(tên)​
console.log("Test kieu du lieu number")
let j = 10/3;
console.log("Check parse int: " + parseInt(j));  // chuyển đổi một chuỗi thành số nguyên
console.log("Check parse float : " + parseFloat(j)); // chuyển đổi một chuỗi thành số thực
console.log(typeof j)

// String: 
// indexOf(): kiểm tra xem một chuỗi có chứa một chuỗi con cụ thể hay không. Nếu có sẽ trả về vị trí xuất hiện đầu tiên của phần tử chuỗi. Nếu không, hàm sẽ trả về -1.
// lastIndexOf(): trả về vị trí xuất hiện lần cuối cùng của một giá trị được tìm thấy trong chuỗi
// search()​:
// Chuyển chữ hoa/thường: toUpperCase()/toLowerCase()​
// Nối chuỗi: concat()

console.log("Test kieu du lieu string")
var myName = "Phuong Nguyen";
console.log("find so thu tu cua chu n: " + myName.indexOf("n"));// index đánh từ 0
console.log("find u " + myName.lastIndexOf("u")); 
console.log(typeof myName)

//object
console.log("Test kieu du lieu object")
var obj1 = {
    "age" : 16,
    "name" : "my name",
    "gender" : "female"
}
console.log(typeof obj1)

// boolean
var check = true;
var check1 = false;
console.log(typeof check);
console.log(typeof check1);

// array
var arr1 = [1,2,3];
var arr2 = [1,"abc", true];
console.log(typeof arr2);
// Có mấy loại khai báo biến trong Javascript? Liệt kê các loại bằng cách lấy ví dụ cho mỗi loại biến đó 
// --------------
/*
Q: Có mấy loại khai báo biến trong Javascript? Liệt kê các loại bằng cách lấy ví dụ cho mỗi loại biến đó 

A: Có 3 loại khai báo biến trong JS.
1) const
Khai báo hằng số, giá trị của biến sẽ không bị thay thế trong toàn bộ chương trình;
VD: 
*/
const x = 10;
// -> Không thể thay thế giá trị của biến x bằng bất cứ giá trị nào khác trong toàn bộ chương trình

// 2) let
// Khai báo biến có phạm vi truy cập trong block bao quanh nó được xác định bằng dấu ()
// VD: 
var y = 10;
if (y = 10) {
    let result = "y bang 10";
     console.log(result + "trong if"); // có thể dùng biến result
} else result = "y khong phai 10";
console.log(result + "ngoài if"); // không thể dùng biến result

// 3) var 
// Khai báo biến có phạm vi truy cập ở hàm số hoặc ngoài hàm (biến toàn cục)
//VD: 

var z = 11;
if (z = 11) {
    var result = "z bang 11";
    console.log(result + "trong if"); // có thể dùng biến result
} else result = "y khong phai 11";//đặt console log ở đây thì được thì nằm trong câu lệnh if
console.log(result + "ngoài if"); // có thể dùng biến result

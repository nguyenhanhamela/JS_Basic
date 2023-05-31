/** 7. Sử dụng comment trong JS để mô tả đúng kiểu dữ liệu của các biến này: */
let length = 16; // kiểu number
let lastName = "nguyen"; // kiểu string
let x = {
    firstName: "Nick",
    lastName: "Doe",
}; // kiểu object

/** 8.Thực hành lại bài khai báo biến local sau, chỉ ra vì sao biến x lại là biến local (biến cục bộ)?*/
function localFunc() {
    var x = 10; // x là biến cục bộ vì nó được khai báo bên trong phạm vi hàm localFunc()
    console.log(x); // local variable, result is 10
}

localFunc();

/** 9.Thực hành lại bài khai báo biến global sau, chỉ ra vì sao biễn globalVar lại là biến global (biến toàn cục)?*/
var globalVar = "some val"; // globalVar là biến toàn cục vì nó được khai báo bên ngoài hàm globalFunc() và hoạt động khi sử dụng trong hàm đó

function globalFunc() {
    console.log(globalVar); //global variable , result is "some val"
}
globalFunc();

/** 10. Các biến nào dưới đây được đặt tên đúng. Trả lời bằng cách thêm câu trả lời vào comment sau mỗi dòng code.
 * Ví dụ: let y = 10 ; // tên biến đặt đúng */

var 123 = 40; // tên biến đặt sai
var * aa = 250; // tên biến đặt sai
var _x_1 = 7; // tên biến đặt đúng
var _value = "test"; // tên biến đặt đúng
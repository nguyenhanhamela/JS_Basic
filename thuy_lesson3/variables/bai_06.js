/**  6.Có mấy loại khai báo biến trong Javascript? Liệt kê các loại bằng cách lấy ví dụ cho mỗi loại biến đó.*/

// const : khai báo hằng số, giá trị của biến không thay đổi trong suốt chương trình. Không được khai báo/gán lại giá trị cho biến trong cùng 1 phạm vi
// VD:
const birth = "08-03-1999";

// var : khai báo biến global (toàn cục), có thể truy cập ở phạm vi bên trong hoặc bên ngoài phạm vi hàm số
// VD:
var name = "Nguyen Thu Thuy";

// let : khai báo biến local (cục bộ), chỉ được sử dụng trong phạm vi hàm khai báo
// VD:
function myInfo() {
  let age = 24;
  console.log(`Toi la ${name}, sinh ngay ${birth}. Nam nay toi ${age} tuoi.`);
}
myInfo();

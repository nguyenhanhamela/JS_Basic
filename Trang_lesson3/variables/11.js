// Áp dụng các hàm xử lý chuỗi để làm các bài sau: 
// Cho chuỗi sau: 

var description = "simply dummy text of the printing" 
// Tìm kiếm chuỗi: indexOf(), lastIndexOf(), search()
let result1 = description.indexOf("s");
console.log("result1 là " + result1); 

let result2 = description.lastIndexOf("text");
console.log("result2 là " + result2);

let result3 = description.search("text");
console.log("vi tri cua result3 la " + result3);

// Tìm vị trí của từ “of” trong chuỗi trên 
let result4 = description.indexOf("of")
console.log("vi tri cua of la " + result4);

// Lấy ra vị trí cuối cùng của chuỗi “the” 
let result5 = description.lastIndexOf("the")
console.log("vị trí cuối cùng của chuỗi “the” là " + result5);

// Cắt chuỗi: slice(start, end), substring(start, end), substr(start, length) 
let result6 = description.slice(0,1)
console.log("cat chuoi " + result6);

// Lấy ra chuỗi “simply dummy” từ chuỗi trên 
let re7 = description.slice(0,12);
console.log(re7);

// Tìm kiếm và thay thế: replace(str_find, str_replace), 
let re8 = description.replace("simply", "complicated");
console.log(re8);

// Thay thế từ “dummy” trong chuỗi trên thành ký tự trống 
let re9 = description.replace("dummy", "");
console.log(re9);

// Chuyển chữ hoa/thường: toUpperCase()/toLowerCase() 
let re10 = description.toUpperCase();
console.log(re10);

let re11 = re10.toLowerCase();
console.log(re11);

// Chuyển đổi chuỗi trên thành toàn bộ chữ hoa 
// let re10 = description.toUpperCase();
// console.log(re10);

// Viết hoa ký tự đầu tiên của chuỗi trên 
let re12 = description.charAt(0)
let re12_1 = re12.to
console.log(re12);

// Nối chuỗi: concat() 
let str1 = "hello ",
    str2 = "world";
let re13 = str1.concat(str2);
console.log(re13);

// Khai báo chuỗi:  var title = "example" 
var title = "example ";

// Nối chuỗi trên với chuỗi vừa khai báo
let re14 = title.concat(re13);
console.log(re14);

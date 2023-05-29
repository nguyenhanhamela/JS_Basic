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
// Lấy ra chuỗi “simply dummy” từ chuỗi trên 
// Tìm kiếm và thay thế: replace(str_find, str_replace), 
// Thay thế từ “dummy” trong chuỗi trên thành ký tự trống 
// Chuyển chữ hoa/thường: toUpperCase()/toLowerCase() 
// Chuyển đổi chuỗi trên thành toàn bộ chữ hoa 
// Viết hoa ký tự đầu tiên của chuỗi trên 
// Nối chuỗi: concat() 
// Khai báo chuỗi:  var title = "example" 
// Nối chuỗi trên với chuỗi vừa khai báo
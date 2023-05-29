var description = "simply dummy text of the printing " 

/* Tìm kiếm chuỗi: indexOf(), lastIndexOf(), search() 
Tìm vị trí của từ “of” trong chuỗi trên 
Lấy ra vị trí cuối cùng của chuỗi “the” */

console.log(description.indexOf("of")); // Output: 18
console.log(description.lastIndexOf("the")); // Output: 28
console.log(description.search("of")); // Output: 18

/* Cắt chuỗi: slice(start, end), substring(start, end), substr(start, length) 
Lấy ra chuỗi “simply dummy” từ chuỗi trên */

console.log(description.slice(0, 12)); // Output: "simply dummy"
console.log(description.substring(32, 39)); // Output: "printing"
console.log(description.substr(18, 2)); // Output: "of"

/* Tìm kiếm và thay thế: replace(str_find, str_replace), 
Thay thế từ “dummy” trong chuỗi trên thành ký tự trống  */

console.log(description.replace("dummy", "")); // Output: "simply text of the printing"

/* Chuyển chữ hoa/thường: toUpperCase()/toLowerCase() 
Chuyển đổi chuỗi trên thành toàn bộ chữ hoa 
Viết hoa ký tự đầu tiên của chuỗi trên */

console.log(description.toUpperCase()); // Output: "SIMPLY DUMMY TEXT OF THE PRINTING"
console.log(description.toLowerCase()); // Output: "simply dummy text of the printing"
console.log(description.charAt(0).toUpperCase() + description.slice(1)); // Output: "Simply dummy text of the printing"

/* Nối chuỗi: concat() 
Khai báo chuỗi:  var title = "example" 
Nối chuỗi trên với chuỗi vừa khai báo */

var title = "example";
console.log(description.concat(title)); // Output: "simply dummy text of the printingexample"




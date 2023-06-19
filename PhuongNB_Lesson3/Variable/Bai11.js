/*Cho chuỗi sau: 
var description = "simply dummy text of the printing " 
1/ Tìm kiếm chuỗi: indexOf(), lastIndexOf(), search() 
Tìm vị trí của từ “of” trong chuỗi trên 
Lấy ra vị trí cuối cùng của chuỗi “the” 
2/ Cắt chuỗi: slice(start, end), substring(start, end), substr(start, length) 
Lấy ra chuỗi “simply dummy” từ chuỗi trên 
3/ Tìm kiếm và thay thế: replace(str_find, str_replace), 
Thay thế từ “dummy” trong chuỗi trên thành ký tự trống 
4/ Chuyển chữ hoa/thường: toUpperCase()/toLowerCase() 
Chuyển đổi chuỗi trên thành toàn bộ chữ hoa 
Viết hoa ký tự đầu tiên của chuỗi trên 
5/ Nối chuỗi: concat() 
Khai báo chuỗi:  var title = "example" 
Nối chuỗi trên với chuỗi vừa khai báo	*/

var description = "simply dummy text of the printing" 
console.log(description.indexOf("of"))
console.log(description.lastIndexOf("the"))
console.log(description.slice(0,12))
console.log(description.replace("dummy",""))
console.log(description.toUpperCase())
var title = "example ";
let content = "chuoi"
let result = title.concat(content)
console.log(result)

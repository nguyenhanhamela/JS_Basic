var description = "simply dummy text of the printing "

// a. Tìm kiếm chuỗi: indexOf(), lastIndexOf(), search()
// § Tìm vị trí của từ “of” trong chuỗi trên
// § Lấy ra vị trí cuối cùng của chuỗi “the”
var a = description.indexOf("of")
console.log(a)
var b = description.lastIndexOf("the")

// b. Cắt chuỗi: slice(start, end), substring(start, end), substr(start, length)
// · Lấy ra chuỗi “simply dummy” từ chuỗi trên
// var c = description.slice(0,13)
// var c = description.substring(0,13)
var c = description.substr(0,12)
console.log(c)

// c. Tìm kiếm và thay thế: replace(str_find, str_replace),
// · Thay thế từ “dummy” trong chuỗi trên thành ký tự trống
var d = description.replace("dummy","")
console.log(d)

// d. Chuyển chữ hoa/thường: toUpperCase()/toLowerCase()
// · Chuyển đổi chuỗi trên thành toàn bộ chữ hoa
// · Viết hoa ký tự đầu tiên của chuỗi trên
var e = description.toUpperCase()
console.log(e)
 
var f = description.charAt(0).toUpperCase() + description.slice(1)
console.log(f)

// e. Nối chuỗi: concat()
// · Khai báo chuỗi: var title = "example"
// · Nối chuỗi trên với chuỗi vừa khai báo
var title = "example"
var g = description.concat(title)
console.log(g)
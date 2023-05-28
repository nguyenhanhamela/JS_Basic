//Tạo 1 đối tượng date
console.log(new Date())//không có truyền tham số thì mặc định là ngày hôm nay, giờ 
console.log(new Date(2023, 5, 10))
console.log(new Date("2023_05_10)"))
//1  số phương thức lấy năm tháng ngày
var date = new Date()
console.log(date.getFullYear(), date.getMonth(), date.getDate())

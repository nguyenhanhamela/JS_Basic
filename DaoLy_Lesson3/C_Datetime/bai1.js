// Tạo 1 đối tượng Date, in ra terminal ngày tháng năm hiện tại 

const d = new Date();

console.log(d.toISOString());
// Từ bài 1, lấy ra năm hiện tại (4 chữ số) 
console.log(d.getFullYear());
// console.log(d.toDateString().slice(11));
//Từ bài 1, lấy ra tháng hiện tại (2 chữ số) 
console.log(d.toISOString().slice(2,4));
//console.log(d.getMonth()+1);
//Từ bài 1, lấy ra ngày hiện tại (2 chữ số) 
console.log(d.toISOString().slice(8,10));
// console.log(d.getDate())

/*Tạo 1 đối tượng Date, in ra terminal ngày tháng năm hiện tại 

Từ bài 1, lấy ra năm hiện tại (4 chữ số) 

Từ bài 1, lấy ra tháng hiện tại (2 chữ số) 

Từ bài 1, lấy ra ngày hiện tại (2 chữ số)  */

var currentDate = new Date();
var Day = (currentDate.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }));
//var Day = currentDate.getDate();
var Month = (currentDate.getMonth() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
//var Month = currentDate.getMonth()+1;
var Year = currentDate.getFullYear();

console.log("Ngày tháng năm hiện tại :" , Day,"/", Month,"/", Year)

console.log("Năm hiện tại:",Year)
console.log("Tháng hiện tại:",Month)
console.log("Ngày hiện tại:", Day)
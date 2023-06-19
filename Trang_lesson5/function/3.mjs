// Bài 3: viết hàm kiểm tra số ngày của 1 tháng, hàm này nhận vào 2 con số đại biểu cho tháng và năm, nó cần trả lại số ngày của tháng đó. ví dụ tháng 1 năm 2000 thì trả lại 31 do tháng 1 có 31 ngày 
// Chú ý: năm nhuận thì tháng 2 có 29 ngày, còn năm không nhuận thì tháng 2 chỉ có 28 ngày. bài 3 cần sử dụng kết quả của bài 2 mới làm chính xác được 

import { checkLeapYear } from "./2.mjs";

function daysOfMonth (year, month) {
    return new Date(year, month, 0).getDate()
}

console.log(daysOfMonth(2000, 2));
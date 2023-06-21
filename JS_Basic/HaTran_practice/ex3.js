// Bài 3: viết hàm kiểm tra số ngày của 1 tháng, hàm này nhận vào 2 con số đại biểu cho tháng và năm, 
// nó cần trả lại số ngày của tháng đó. ví dụ tháng 1 năm 2000 thì trả lại 31 do tháng 1 có 31 ngày 

const checkYear = require('./ex2')
// console.log("Check year", checkYear(1999))

function dayofmonth(m,y){
    switch(m){
        case 1: 
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31
        case 2: 
            return checkYear(y) ? 29 : 28
        case 4: 
        case 6:
        case 9:
        case 11:
            return 30
    }
}
console.log (dayofmonth(2,2023))
// Bài 2: viết hàm kiểm tra năm nhuận, hàm nhận vào 1 số tự nhiên là năm cần kiểm tra, 
// trả lại true nếu năm đó là năm nhuận, false nếu ngược lại. quy tắc kiểm tra năm nhuận như sau: 
// nếu đó là năm thế kỉ (các năm chia hết cho 100) thì nó chỉ là năm nhuận nếu chia hết cho 400  
// nếu đó không phải năm thế kỉ thì nó là năm nhuận nếu chia hết cho 4 

function CheckNamNhuan (year) {
    if((year % 100 == 0) && (year % 400 == 0)){
        return true
    } else if((year % 100 !=0) && (year % 4 == 0)){
        return true
    } else{
        return false
    }
}

// const demo = CheckNamNhuan(1999)
// console.log(demo)

module.exports = CheckNamNhuan


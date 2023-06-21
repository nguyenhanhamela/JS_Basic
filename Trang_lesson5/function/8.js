// Bài 8: (khó) viết hàm tính ngày tiếp theo. 
// hàm này nhận vào 3 tham số ngày tháng năm, trả lại một mảng chứa 3 con số đại biểu ngày tháng năm của ngày kế tiếp 
//   ví dụ: nhập vào 31, 12, 2009 thì cần return [1, 1, 2010] 

function nextDay(year, month, day) {
    let x = month - 1
    console.log(x);
    let date = new Date(year, x, day) 
    console.log(date);
    let next = date.setDate(date.getDate()+1)
    return next
}
console.log(nextDay(2023,6,21));
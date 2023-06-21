// Bài 7: viết hàm so sánh 2 ngày bất kì (mỗi ngày đại biểu bởi 3 con số ngày, tháng, năm). 
// trả lại 0 nếu bằng nhau, -1 nếu ngày thứ nhất nhỏ hơn, 1 nếu ngày thứ nhất lớn hơn 

function compareDate(day1, day2) {
    let d1 = new Date(day1)
    let d2 = new Date(day2)
    let compare = ""
    if (d1 < d2) {
        compare = -1
    } else if (d1 > d2) {
        compare = 1
    } else compare = 0

    return compare    
}
console.log(compareDate('01-01-2023','01-01-2022'));
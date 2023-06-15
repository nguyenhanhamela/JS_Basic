// Bài 7: viết hàm so sánh 2 ngày bất kì (mỗi ngày đại biểu bởi 3 con số ngày, tháng, năm). 
// trả lại 0 nếu bằng nhau, -1 nếu ngày thứ nhất nhỏ hơn, 1 nếu ngày thứ nhất lớn hơn 

//   Ví dụ: 
//   compare(3,10, 2012, 4, 5, 2017) => -1 
//   compare(3,10, 2012, 4, 5, 2016) => 1 
//   compare(3,10, 2012, 3,10, 2012) => 0 

function SS2n (d1, m1, y1, d2, m2, y2){
    var date1 = d1 + m1 + y1
    var date2 = d2+ m2+ y2
    if(date1 == date2){
        return 0
    }
    else if(date1 < date2){
        return -1
    }
    return 1
}
console.log(SS2n(1,10,2012, 3,6,2023))
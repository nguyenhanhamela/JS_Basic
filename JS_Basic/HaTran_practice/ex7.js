// Bài 7: viết hàm so sánh 2 ngày bất kì (mỗi ngày đại biểu bởi 3 con số ngày, tháng, năm). 
// trả lại 0 nếu bằng nhau, -1 nếu ngày thứ nhất nhỏ hơn, 1 nếu ngày thứ nhất lớn hơn 
// vd: compare(3,10,2012,4,5,2017)

function compare (d1,m1,y1,d2,m2,y2){
    // nếu y1 < y2 => -1
    // Nếu y1 > y2 => 1 
    // Nếu y1 = y2 && m1 < m2 => -1
    // Nếu y1 = y2 && m1 = m2 && d1 < d2 => -1
    // Nếu y1 = y2 && m1 = m2 && d1 > d2 => 1
    // Nếu y1 = y2 && m1 > m2 => 1
    // Nếu y1 = y2 && m1=m2 && d1 = d2 => 0

    if(y1 < y2){
        return -1
    } else if(y1 > y2){
        return 1
    } else{
        if(m1 < m2){
            return -1
        } else if (m1 > m2){
            return 1
        } else if (m1 == m2){
            if(d1 < d2){
                return -1
            } else if (d1 > d2){
                return 1
            } else{
                return 0
            }
        }
    }
}

const result = compare(2,4,2023,2,2,2023)
console.log("result", result)
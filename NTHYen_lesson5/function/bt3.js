// Bài 3: viết hàm kiểm tra số ngày của 1 tháng, 
// hàm này nhận vào 2 con số đại biểu cho tháng và năm, nó cần trả lại số ngày của tháng đó. 
// ví dụ tháng 1 năm 2000 thì trả lại 31 do tháng 1 có 31 ngày 

// function KtraSN1T(month, year){
//     return new Date(year, month, 0).getDate()
// }
// console.log(KtraSN1T(2,2023))

function KtraSN1T(month, year){
    let nn = false;
    if((year%4 == 0 && year%100 != 0) || year%400 == 0)
    {
        nn = true; 
    }
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31
        case 4:
        case 6:
        case 9:
        case 11:
            return 30
        case 2:
            if(nn){
                return 29
            }
            return 28
    }

}
console.log(KtraSN1T(5,2023))

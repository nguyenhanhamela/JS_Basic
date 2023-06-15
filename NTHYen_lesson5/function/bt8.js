//  Bài 8: (khó) viết hàm tính ngày tiếp theo. hàm này nhận vào 3 tham số ngày tháng năm, 
// trả lại một mảng chứa 3 con số đại biểu ngày tháng năm của ngày kế tiếp 
// ví dụ: nhập vào 31, 12, 2009 thì cần return [1, 1, 2010] 

function KtraSN1T(date, month, year){
    var countdate = 0
    let nn = false;
    var datenew = date
    var monthnew = month
    var yearnew = year
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
            countdate = 31
        break;
        case 4:
        case 6:
        case 9:
        case 11:
            countdate = 30
        break;
        case 2:
            if(nn){
                countdate = 29
            break;
            }
            countdate = 28
            break;
    }
    if( date == countdate){
        datenew = 1;
        if(month == 12){
            monthnew = 1
            yearnew = year + 1
        }
        else{
            monthnew = month + 1
        }
    }
    else{
        datenew = date + 1
    }
    return datenew + ',' + monthnew + ',' + yearnew
}
console.log(KtraSN1T(31,5,2023))
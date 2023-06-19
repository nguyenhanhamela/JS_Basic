
/*Bài 2: viết hàm kiểm tra năm nhuận, hàm nhận vào 1 số tự nhiên là năm cần kiểm tra, 
trả lại true nếu năm đó là năm nhuận, false nếu ngược lại. quy tắc kiểm tra năm nhuận như sau: 
nếu đó là năm thế kỉ (các năm chia hết cho 100) thì nó chỉ là năm nhuận nếu chia hết cho 400  
nếu đó không phải năm thế kỉ thì nó là năm nhuận nếu chia hết cho 4 
*/

function LeapYear(yearInput) {
    if (yearInput % 400 === 0) {
        return true;
    } else if (yearInput % 4 === 0 && yearInput % 100 !== 0) {
        return true;
    } else {
        return false;
    }
}
let checkYear = LeapYear(1996)
console.log(checkYear);

/* Bài 3: viết hàm kiểm tra số ngày của 1 tháng, hàm này nhận vào 2 con số đại biểu cho tháng và năm, 
nó cần trả lại số ngày của tháng đó. 
ví dụ tháng 1 năm 2000 thì trả lại 31 do tháng 1 có 31 ngày 
Chú ý: năm nhuận thì tháng 2 có 29 ngày, còn năm không nhuận thì tháng 2 chỉ có 28 ngày. 
bài 3 cần sử dụng kết quả của bài 2 mới làm chính xác được 
*/

let CheckDayOfMonth = function (monthInput, yearInput) {
    let checkYear = LeapYear(yearInput)
    let number;
    if (monthInput < 1 || monthInput > 12 || yearInput < 1) {
        console.log("Tháng, năm nhập vào không hợp lệ");
        number = null
    } else if (monthInput === 1 || monthInput === 3 || monthInput === 5 || monthInput === 7 || monthInput === 8 || monthInput === 10 || monthInput === 12) {
        number = 31
    } else if (monthInput === 2) {
        if (checkYear === true) {
            number = 29
        } else {
            number = 28
        }
    } else {
        number = 30
    }
    console.log("Tháng " + monthInput + " năm " + yearInput + " có: " + number + " ngày");
}
CheckDayOfMonth(100, 2023)

/*Bài 7: viết hàm so sánh 2 ngày bất kì (mỗi ngày đại biểu bởi 3 con số ngày, tháng, năm). 
trả lại 0 nếu bằng nhau, 
-1 nếu ngày thứ nhất nhỏ hơn, 
1 nếu ngày thứ nhất lớn hơn 

  Ví dụ: 
  compare(3,10, 2012, 4, 5, 2017) => -1 

  compare(3,10, 2012, 4, 5, 2016) => 1 

  compare(3,10, 2012, 3,10, 2012) => 0 
  */
function CompareDate(date1, month1, year1, date2, month2, year2) {
    if (year1 > year2) {
        return 1;
    } else if (year1 === year2 && month1 > month2) {
        return 1;
    } else if (year1 === year2 && month1 === month2 && date1 > date2) {
        return 1;
    } else if (year1 === year2 && month1 === month2 && date1 === date2) {
        return 0;
    } else {
        return -1;
    }
}

console.log(CompareDate(3, 10, 2012, 3, 10, 2012));


/*Bài 8: (khó) viết hàm tính ngày tiếp theo. hàm này nhận vào 3 tham số ngày tháng năm, 
trả lại một mảng chứa 3 con số đại biểu ngày tháng năm của ngày kế tiếp 
ví dụ: nhập vào 31, 12, 2009 thì cần return [1, 1, 2010] */

function addOneDay(date, month, year) {
    let dayInMonth = CheckDayOfMonth(month, year)
    let nextDay = date + 1;
    let monthInNextDay = month;
    let yearInNextDay = year;
    if (date < dayInMonth) {
        nextDay = nextDay;
    } else if (date = dayInMonth && month < 12) {
        nextDay = 1;
        monthInNextDay = monthInNextDay + 1;
        yearInNextDay = yearInNextDay
    } else {
        nextDay = 1;
        monthInNextDay = 1;
        yearInNextDay = yearInNextDay + 1;
    }
return new Array(nextDay,monthInNextDay,yearInNextDay);
}
console.log(addOneDay(31, 12, 2009));
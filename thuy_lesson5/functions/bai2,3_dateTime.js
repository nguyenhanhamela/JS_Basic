/**Bài 2: Viết hàm kiểm tra năm nhuận, hàm nhận vào 1 số tự nhiên là năm cần kiểm tra, trả lại true nếu năm đó là năm nhuận, false nếu ngược lại. 
  * Quy tắc kiểm tra năm nhuận như sau:
    + nếu đó là năm thế kỉ (các năm chia hết cho 100) thì nó chỉ là năm nhuận nếu chia hết cho 400
    + nếu đó không phải năm thế kỉ thì nó là năm nhuận nếu chia hết cho 4 
*/
function leapYear(year) {
  let check = false;
  if (year % 100 == 0 && year % 400 == 0) {
    check = true;
  } else if (year % 4 == 0) {
    check = true;
  }
  return check;
}

function leapYearResults(year) {
  console.log(`${year} là năm nhuận: ${leapYear(year)}`);
}

leapYearResults(2017);

/**Bài 3: Viết hàm kiểm tra số ngày của 1 tháng, hàm này nhận vào 2 con số đại biểu cho tháng và năm, nó cần trả lại số ngày của tháng đó.
 * Ví dụ: tháng 1 năm 2000 thì trả lại 31 do tháng 1 có 31 ngày
 * Chú ý: năm nhuận thì tháng 2 có 29 ngày, còn năm không nhuận thì tháng 2 chỉ có 28 ngày.*/
function dayOfMonth(month, year) {
  let checkYear = leapYear(year);
  let numberOfDays;
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    numberOfDays = 31;
  } else if ((month = 2)) {
    if ((checkYear = true)) {
      numberOfDays = 29;
    }
    numberOfDays = 28;
  } else numberOfDays = 30;

  console.log(`${month}/${year} có ${numberOfDays} ngày`);
}

dayOfMonth(2, 2017);

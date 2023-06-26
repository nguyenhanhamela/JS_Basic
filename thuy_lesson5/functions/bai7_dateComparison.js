/**Bài 7: Viết hàm so sánh 2 ngày bất kì (mỗi ngày đại biểu bởi 3 con số ngày, tháng, năm). 
Trả về: 0 nếu bằng nhau, -1 nếu ngày thứ nhất nhỏ hơn, 1 nếu ngày thứ nhất lớn hơn
Ví dụ:
    compare(3,10, 2012, 4, 5, 2017) => -1
    compare(3,10, 2012, 4, 5, 2016) => 1
    compare(3,10, 2012, 3,10, 2012) => 0 
*/

// so sánh year > month > day
function compareDate(day1, month1, year1, day2, month2, year2) {
  let tmp;

  if (
    year1 < year2 ||
    (year1 == year2 && month1 < month2) ||
    (year1 == year2 && month1 == month2 && day1 < day2)
  ) {
    tmp = -1;
  } else if (
    year1 > year2 ||
    (year1 == year2 && month1 > month2) ||
    (year1 == year2 && month1 == month2 && day1 > day2)
  ) {
    tmp = 1;
  } else tmp = 0;

  console.log(
    `So sánh ${day1}/${month1}/${year1} với ${day2}/${month2}/${year2} : ${tmp} `
  );
}

compareDate(1, 3, 2020, 1, 3, 2020); //  output : 0
compareDate(1, 3, 2020, 4, 6, 2020); //  output : -1
compareDate(1, 3, 2020, 4, 6, 2019); //  output : 1

var date = new Date()
const month = [01,02,03,04,05,06,07,08,09,10,11,12]
const current_year = date.getFullYear();
const current_month = month[date.getMonth()];
const current_day = date.getDate()
console.log("Thời gian hiện tại là: ", date)
console.log("Năm hiện tại là: ", current_year)
console.log("Tháng hiện tại là: ", current_month)
console.log("Ngày hiện tại là: ", current_day)


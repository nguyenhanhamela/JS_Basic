// Viết chương trình in ra các ngày số lẻ trong tháng hiện tại của năm nay 
// lay ra thang hien tai cua nam nay
// lay ra tat ca ngay cua thang hien tai thanh 1 mang
// kiem tra xem ngay nao la ngay le A[i] % 2 === 0

const td = new Date()
const currentYear = td.getFullYear()
const currentMonth = td.getMonth() + 1
const daysOfMonth = new Date(currentYear, currentMonth, 0).getDate() //lay duoc so ngay trong thang

let oddDays = []
for (let i = 1; i <= daysOfMonth; i++) {
    if (i % 2 === 1) {
        oddDays.push(i)
    }
}
console.log("Cac ngay le trong thang",currentMonth,"la",oddDays);



// function getDaysInMonth(year, month) {
//     return new Date(year, month, 0).getDate();
//   }
  
//   const date = new Date();
//   const currentYear = date.getFullYear();
//   const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based
  
//   // 👇️ Current Month
//   const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
//   console.log(daysInCurrentMonth); // 👉️ 30








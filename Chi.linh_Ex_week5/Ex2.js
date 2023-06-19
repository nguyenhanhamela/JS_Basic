//Bài 2: viết hàm kiểm tra năm nhuận

function checkLeapyear(n) {
  if (n % 4 === 0) {
    if (n % 100 === 0) {
      if (n % 400 === 0) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }
  return false
}
console.log('Năm nhuận:', checkLeapyear(1700));



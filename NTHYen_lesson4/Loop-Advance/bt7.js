// 7. Viết chương trình in ra các ngày số lẻ trong tháng hiện tại của năm nay

function inNgaySoLe() {
    const now = new Date();
    const month = now.getMonth(); 
    const year = now.getFullYear(); 
  
    console.log(`Các ngày số lẻ trong tháng ${month + 1} năm ${year}:`);
  
    const daysInMonth = new Date(year, month + 1, 0).getDate(); 
  
    for (let i = 1; i <= daysInMonth; i += 2) {
      console.log(i);
    }
  }
  
  inNgaySoLe();
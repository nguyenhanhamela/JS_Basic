//Viết chương trình in ra các ngày số lẻ trong tháng hiện tại của năm nay 

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth()+1;
  const daysInCurrentMonth = new Date(currentYear,currentMonth,0).getDate()
  let odd_day = [];
  for(let i = 1; i<= daysInCurrentMonth ; i++){
    if(i%2 !== 0){
        odd_day.push(i)
    }
  }
  console.log("ngay lẻ trong tháng ",daysInCurrentMonth, "là: ",  odd_day)
  
  
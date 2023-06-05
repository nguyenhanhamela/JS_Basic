console.log(new Date()) // k truyền sẽ hiểu là thời gian hiện tại, giờ UTC+7
console.log(new Date("2023-5-10"))

var date = new Date();
console.log(date.getFullYear(), 
date.getMonth() + 1, 
date.getDate(), 
date.getDay(), 
date.getHours(), 
date.getMinutes(), 
date.getSeconds()
)
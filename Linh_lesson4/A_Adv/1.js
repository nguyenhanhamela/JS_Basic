// Viết chương trình in số thứ tự của số nguyên n (n > 0) với hậu tố st, nd, rd hoặc th (làm bằng cả 2 cách if / else, switch / case) 

let n = 102
let y = ""

if (n % 10 === 1 ) {
  y = "st";
} else if (n % 10 === 2 ) {
  y = "nd";
} else if (n % 10 === 3 ) {
  y = "rd";
} else {
  y = "th";
}

console.log(n + y);
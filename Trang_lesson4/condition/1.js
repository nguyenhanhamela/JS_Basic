// Viết chương trình in số thứ tự của số nguyên n (n > 0) 
// với hậu tố st, nd, rd hoặc th (làm bằng cả 2 cách if / else, switch / case) 


let n = 102;
let x = n % 10;

//switch case
// switch (x) {
//     case 1:
//         n += "st";
//         break;
//     case 2:
//         n += "nd";
//         break;
//     case 3:
//         n += "rd";   
//         break;

//     default:
//         n += "th"
//         break;
// }
// console.log(n);
// if else

if (x === 1) {
    n += "st"
} else if (x === 2) {
    n += "nd";
} else if (x === 3) {
    n += "rd";
} else n += "th";
console.log(n);

// Cho chữ số sau: const wordEx = 123426. Sử dụng while để đếm các chữ số của số đã cho. Ví dụ: Tổng chữ số của wordEx là 6 chữ số. 

let wordEx = 123426;
let count = 0;

while (wordEx > 0) {
  count++;
  wordEx = Math.floor(wordEx / 10);
}

console.log("Tổng chữ số của wordEx là " + count + " chữ số.");

// cách 2

// let wordEx = 123426;
// let i = 0;
// while(wordEx !=0) //#0
// i += 1
// const donVi = wordEx % 10;
// wordEx = parseInt(wordEx/10)
// console.log("donvi=",donVi,"x =", wordEx);
// }
// while
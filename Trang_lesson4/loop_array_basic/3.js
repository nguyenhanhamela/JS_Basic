// Cho chữ số sau: const wordEx = 123426. Sử dụng while để đếm các chữ số của số đã cho. Ví dụ: Tổng chữ số của wordEx là 6 chữ số. 
let wordEx = 123456
let str = wordEx.toString()
let i = 0
// while (i < str.length) {
//     ++i
// }
// console.log("Tổng chữ số của wordEx là: " + i);

// console.log("Xu ly bang do while")
do {
    i++
    const DonVi = wordEx % 10;
    wordEx = parseInt(wordEx / 10)
    if (wordEx === 0) break
} while (wordEx != 0)
console.log("so chu so cua",wordEx,"la",i);


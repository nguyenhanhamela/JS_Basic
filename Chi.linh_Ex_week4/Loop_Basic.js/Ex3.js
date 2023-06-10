//Cho chữ số sau: const wordEx = 123426. Sử dụng while để đếm các chữ số của số đã cho. Ví dụ: Tổng chữ số của wordEx là 6 chữ số. 
//Dùng while
const wordEx = 123426

const s = wordEx.toString()

let i = 0;
while(i < s.length){
    i+= 1;

}
console.log('Tong chu so cua wordEx la', i, 'chu so');


//Cách 2. Nếu k cho chuyển sang dạng string

// let wordEx = 123426
// let i = 0;
// do {
//     i += 1
//     let donVi = wordEx % 10;
//     wordEx = parseInt(wordEx / 10)
//     console.log('donVi =', donVi, 'x= ', wordEx)
//     if (wordEx === 0) break
// }
//     while(wordEx !=0)
//     console.log(i);

//Cách 2.1

// let wordEx = 123426
// let i = 0;
// while(wordEx){
//     i += 1
//     let donVi = wordEx % 10;
//     wordEx = parseInt(wordEx / 10)
//     console.log('donVi =', donVi, 'x= ', wordEx)
// }
//     console.log(i);



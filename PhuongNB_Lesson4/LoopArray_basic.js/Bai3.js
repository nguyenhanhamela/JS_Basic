// BT3: Cho chữ số sau: const wordEx = 123426. 
// Sử dụng while để đếm các chữ số của số đã cho. Ví dụ: Tổng chữ số của wordEx là 6 chữ số

// C1: chia lấy phần nguyên
console.log("test bai 3 cach 1");
let wordEx = 123456
let k = 0;
do {
    k +=1;
    const donvi = wordEx % 10;
    wordEx = parseInt(wordEx / 10);
    // console.log("don vi =" , donvi, "x =", wordEx);
    if (wordEx === 0) break;
} while(true)
console.log(k);


// // C2: chuyển sang string
// console.log("Test bai 3 cach 2")
// const wordEx2 = 123456
// const s = wordEx2.toString()
// console.log(s.length)
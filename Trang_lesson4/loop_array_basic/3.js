// Cho chữ số sau: const wordEx = 123426. Sử dụng while để đếm các chữ số của số đã cho. Ví dụ: Tổng chữ số của wordEx là 6 chữ số. 
let wordEx = 123456
let str = wordEx.toString()
let length = 0
while (length < str.length) {
    ++length
}
console.log("Tổng chữ số của wordEx là: " + length);
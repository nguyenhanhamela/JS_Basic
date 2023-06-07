// 3. Cho chữ số sau: const wordEx = 123426. Sử dụng while để đếm các chữ số của số đã cho. 
// Ví dụ: Tổng chữ số của wordEx là 6 chữ số.
const wordEx = 12342677
let count = 0

while (wordEx.toString().length > 0){
    count++;
    if (count == wordEx.toString().length) {
        break;
    }
}
console.log(count)
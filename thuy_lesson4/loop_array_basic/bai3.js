/**3. Cho chữ số sau: const wordEx = 123426.
 * Sử dụng while để đếm các chữ số của số đã cho.
 * Ví dụ: Tổng chữ số của wordEx là 6 chữ số. */

const wordEx = 1999;
let count = 0;
let num = wordEx;

while (num !== 0) {
  count++;
  num = Math.floor(num / 10); // Math.floor() : làm tròn số nguyên xuống
}

console.log(`Tong chu so cua ${wordEx} is ${count} chu so`);

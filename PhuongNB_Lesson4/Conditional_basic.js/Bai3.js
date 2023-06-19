/*Bài 3. Viết câu lệnh if/else để tìm ra dấu tích của 3 số x, y, z. 
Ví dụ: x = 3, y = 5, z = -1 thì log ra màn hình “Dấu là -”. 
Ví dụ: x = 1, y = 2, z = 3 thì log ra màn hình “Dấu là +” */
const x = 3, y = -5, z = -1;
let S = x*y*z;
if (S >= 0) {
    console.log("+");
} else console.log("-");
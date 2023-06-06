/**3. Viết câu lệnh if/else để tìm ra dấu tích của 3 số x, y, z.
 * Ví dụ: x = 3, y = 5, z = -1 thì log ra màn hình “Dấu là -”.
 * Ví dụ: x = 1, y = 2, z = 3 thì log ra màn hình “Dấu là +” */

let x = 8,
  y = -10,
  z = 9;

let xyz = x * y * z;

if (xyz < 0) {
  console.log("Dau tich của 3 so x, y, z la: -");
} else if (xyz > 0) {
  console.log("Dau tich của 3 so x, y, z la: +");
} else {
  console.log("Tich của 3 so x, y, z bang: 0");
}

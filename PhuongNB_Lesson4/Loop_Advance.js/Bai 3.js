// Bài 3: tính tổng xích ma biểu thức i bình phương với i chạy từ 1 đến n
const n = 4;
let tong = 0;
for (let i = 1; i<= n; i++){
    tong = tong + i*i
}
console.log("Tong binh phuong cac so tu 1 den", n, "la:", tong)
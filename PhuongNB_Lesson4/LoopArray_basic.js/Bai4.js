//BT4:Cho mảng sau: C = [2, 45, 3, 67, 34, 567, 34, 345, 123]. 
//Tìm số lớn nhất trong mảng C bằng cách sử dụng vòng for.., lệnh if/else 
const C = [2, 45, 3, 67, 34, 567, 34, 345, 123];
if (C.length == 0) {console.log("Mang rong")}
else {
let max = C[0];
for (let m = 1; m < C.length; m++){
    if (C[m] > max) {max = C[m]}
}
console.log("So lon nhat la",max)}
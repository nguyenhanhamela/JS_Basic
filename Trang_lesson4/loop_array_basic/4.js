// Cho mảng sau: C = [2, 45, 3, 67, 34, 567, 34, 345, 123]. Tìm số lớn nhất trong mảng C 
// bằng cách sử dụng vòng for.., lệnh if/else 
let C = [2, 45, 3, 67, 34, 567, 34, 345, 123]
// let A = C[0]
// for (let i = 1; i < C.length; i++) {
//     if (A < C[i]) {
//         A = C[i]
//     }
// }
if (C.length > 0) {
    let max = C[0]
    for (i of C) {
        if (max < i) {
            max = i
        } 
    }
    console.log("So lon nhat la " + max);
} else console.log("error");

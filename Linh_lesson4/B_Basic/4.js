// Cho mảng sau: C = [2, 45, 3, 67, 34, 567, 34, 345, 123]. Tìm số lớn nhất trong mảng C bằng cách sử dụng vòng for.., lệnh if/else 

const C = [2, 45, 3, 67, 34, 567, 34, 345, 123];

// max = C[0]
// kiểm tra lần lượt từng số:
//     nếu số hiện tại > max thì 
//         max = hiện tại
// in ra max

// dùng vòng for
// if (C.length >0)
// max = C[0]
// for(let i = 0; i < C.length;i++){
//     if(C[i]>max)
//         max = C[i]
//     }
// console.log("max:",max)


// dùng vòng for of
if (C.length >0)
max = C[0]
for(let item of C){
    if(item>max)
        max = item
    }
console.log("max:",max)

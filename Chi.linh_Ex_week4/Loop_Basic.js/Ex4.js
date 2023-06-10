//Cho mảng sau: C = [2, 45, 3, 67, 34, 567, 34, 345, 123]. Tìm số lớn nhất trong mảng C bằng cách sử dụng vòng for.., lệnh if/else 

// max = C[0]
//Kiểm tra lần lượt từng số:
//nếu số hiện tại > max thi
//max = so hien tai
//in ra max 


const C = [2, 45, 3, 67, 34, 567, 34, 345, 123];

let max = C[0]; 

for ( let i = 0 ; i < C.length ; i++){
    if (C[i] > max)
        max = C[i];
}
    console.log(max);
//}

//Dùng for of
// let max = C[0]; // nếu mảng rỗng thì undefine

// for ( let item of C){
//     if (C[i] > max)
//         max = C[i];
// }
//     console.log(max);
    


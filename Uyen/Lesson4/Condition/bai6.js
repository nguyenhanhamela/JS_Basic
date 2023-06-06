//Cho mảng sau: C = [2, 45, 3, 67, 34, 567, 34, 345, 123]. Tìm số lớn nhất trong mảng C bằng cách sử dụng vòng for.., lệnh if/else 
const C = [2, 45, 3, 67, 34, 567, 34, 345, 123];
var max= 0;
for (i = 0; i < C.length; i++){
    if (max <= C[i]){
        max = C[i];
    }
}
 console.log(max);
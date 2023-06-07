// 4. Cho mảng sau: C = [2, 45, 3, 67, 34, 567, 34, 345, 123]. 
// Tìm số lớn nhất trong mảng C bằng cách sử dụng vòng for.., lệnh if/else
 var C = [2, 45, 3, 67, 34, 567, 34, 345, 123]
 var max = C[0] ;
 for(var i = 0; i<C.length; i++){
    if(C[i]>max){
        max = C[i]
    }
 }

 console.log(max)
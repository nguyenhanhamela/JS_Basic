/*Bài 9: Viết hàm tính khoảng cách 2 điểm bất kì trong mặt phẳng. 
Biết khoảng cách giữa 2 điểm A(x1, y1) và B (x2, y2) là căn bậc 2 của (x1 - x2)^2 + (y1-y2)^2 
*/
function distance(A,B){
    let AB = 0;
    if(A.length === 2 && B.length === 2){
       return AB = Math.sqrt(Math.pow((A[0] - B[0]), 2)+ Math.pow((A[1]-B[1]), 2))
    } else {
        console.log(" 2 diem khong hop le");
        return null;
    }
}

/* Bài 10: Viết hàm tính chu vi tam giác, biết tọa độ 3 đỉnh. 
Chu vi là tổng độ dài các cạnh, sử dụng kết quả bài 9 */

function PerimeterOfTriangle([x1,y1],[x2,y2], [x3,y3]){
    det(A) = x1*(y2 - y3) - y1*(x2 - x3) + (x2*y3 - y2*x3)
    let AB = distance([x1,y1],[x2,y2]);
    let AC = distance([x1,y1], [x3,y3]);
    let BC = distance([x2,y2], [x3,y3]);
    angle 
    
}



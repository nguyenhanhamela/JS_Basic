//  Bài 9: Viết hàm tính khoảng cách 2 điểm bất kì trong mặt phẳng. 
// Biết khoảng cách giữa 2 điểm A(x1, y1) và B (x2, y2) là căn bậc 2 của (x1 - x2)^2 + (y1-y2)^2 


function Kc2D(x1, y1, x2, y2){
    return a = Math.sqrt(((x1 - x2)*(x1 - x2))+ ((y1-y2)*(y1-y2)) )
}
console.log(Kc2D(2,3,4,5))
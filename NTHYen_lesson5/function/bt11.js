// Bài 11: viết hàm tính diện tích tam giác biết tọa độ 3 đỉnh. Tính bằng công thức heron khi biết độ dài các cạnh. 
// xem công thức ở đây https://vi.wikipedia.org/wiki/C%C3%B4ng_th%E1%BB%A9c_Heron  . Vận dụng bài 9 


function Kc2D(x1, y1, x2, y2, x3, y3){
    var ab = Math.sqrt(((x2 - x1)*(x2 - x1))+ ((y2-y1)*(y2-y1)) )
    var bc =  Math.sqrt(((x3 - x2)*(x3 - x2))+ ((y3-y2)*(y3-y2)) ) 
    var ac =  Math.sqrt(((x3 - x1)*(x3 - x1))+ ((y3-y1)*(y3-y1)) ) 
    var NCVi = (ab + bc + ac)/2
    return Math.sqrt(NCVi*(NCVi - ab)*(NCVi - bc)* (NCVi - ac))
}
console.log(Kc2D(2,3,4,5,6,7))
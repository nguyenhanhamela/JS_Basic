// Bài 10: Viết hàm tính chu vi tam giác, biết tọa độ 3 đỉnh. Chu vi là tổng độ dài các cạnh, sử dụng kết quả bài 9 

function Kc2D(x1, y1, x2, y2, x3, y3){
    var ab = Math.sqrt(((x2 - x1)*(x2 - x1))+ ((y2-y1)*(y2-y1)) )
    var bc =  Math.sqrt(((x3 - x2)*(x3 - x2))+ ((y3-y2)*(y3-y2)) ) 
    var ac =  Math.sqrt(((x3 - x1)*(x3 - x1))+ ((y3-y1)*(y3-y1)) ) 

    return ab + bc + ac
}
console.log(Kc2D(2,3,4,5,6,7))
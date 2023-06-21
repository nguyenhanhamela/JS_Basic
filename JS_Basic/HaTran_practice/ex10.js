// Bài 10: Viết hàm tính chu vi tam giác, biết tọa độ 3 đỉnh. Chu vi là tổng độ dài các cạnh, sử dụng kết quả bài 9 

const tinhKhoangCachHaiDiem = require('./ex9')

// console.log(tinhKhoangCachHaiDiem(3,4,4,3))

function chuVi(x1,y1,x2,y2,x3,y3){
    const ab = tinhKhoangCachHaiDiem(x1,y1,x2,y2)
    // console.log("Khoang cach canh ab = ",ab)
    const bc = tinhKhoangCachHaiDiem(x2,y2,x3,y3)
    // console.log("Khoang cach canh bc = ",bc)
    const ac = tinhKhoangCachHaiDiem(x1,y1,x3,y3)
    // console.log("Khoang cach canh ac = ",ac)
    const chuVi = ab + bc + ac
    return chuVi
}

const kq = chuVi(1,2,3,4,5,6)
console.log("chu vi tam giac = ", kq)
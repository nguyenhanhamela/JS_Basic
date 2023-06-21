// Bài 11: viết hàm tính diện tích tam giác biết tọa độ 3 đỉnh. 
// Tính bằng công thức heron khi biết độ dài các cạnh. 
// xem công thức ở đây https://vi.wikipedia.org/wiki/C%C3%B4ng_th%E1%BB%A9c_Heron  . Vận dụng bài 9 
// Gọi S là diện tích và độ dài 3 cạnh tam giác lần lượt là a, b, và c p = (a+b+c)/2 Công thức độc lập của tôi là
// S = căn bậc 2 của p(p-a)(p-b)(p-c)
// p = (a+b+c)/2

const tinhKhoangCachHaiDiem = require('./ex9')

// console.log(tinhKhoangCachHaiDiem(3,4,4,3))

function dienTich(x1,y1,x2,y2,x3,y3){
    const ab = tinhKhoangCachHaiDiem(x1,y1,x2,y2)
    // console.log("Khoang cach canh ab = ",ab)
    const bc = tinhKhoangCachHaiDiem(x2,y2,x3,y3)
    // console.log("Khoang cach canh bc = ",bc)
    const ac = tinhKhoangCachHaiDiem(x1,y1,x3,y3)
    // console.log("Khoang cach canh ac = ",ac)
    const p = (ab + bc + ac) / 2
    // console.log("chu vi", p)
    const S = Math.sqrt((p - ab)*(p - bc)*(p - ac))
    return S
}

const kq = dienTich(3,9,2,4,3,7)
console.log("diện tích tam giac = ", kq)
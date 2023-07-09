/*3. Xây dựng lớp HinhChuNhat gồm 

     - Thuộc tính: chieuDai (number), chieuRong (number) 

     - Phương thức: 

        + tinhChuVi: tính chu vi của hình 

        + tinhDienTich: tính diện tích của hình */

class HCN {
    dai
    rong
    constructor(dai,rong) {
        this.dai = dai
        this.rong = rong
    }
    chuVi(){
        return (this.dai+this.rong)*2
    }
    dienTich(){
        return this.dai*this.rong
    }
}

var hcn_1 = new HCN(4,5)
console.log(hcn_1.chuVi())
console.log(hcn_1.dienTich())

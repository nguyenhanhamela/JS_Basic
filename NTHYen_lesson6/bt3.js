// 3. Xây dựng lớp HinhChuNhat gồm 

//      - Thuộc tính: chieuDai (number), chieuRong (number) 

//      - Phương thức: 

//         + tinhChuVi: tính chu vi của hình 

//         + tinhDienTich: tính diện tích của hình 

//     Viết chương trình tính chu vi và diện tích của hình chữ nhật và hình vuông 



class HinhChuNhat {
    constructor(chieuDai, chieuRong) {
      this.chieuDai = chieuDai;
      this.chieuRong = chieuRong;
    }
  
    tinhChuVi() {
      return (this.chieuDai + this.chieuRong) * 2;
    }
  
    tinhDienTich() {
      return this.chieuDai * this.chieuRong;
    }
  }
  
  const hcn = new HinhChuNhat(4, 9);
  console.log(`Hình chữ nhật: Chiều dài = ${hcn.chieuDai}, Chiều rộng = ${hcn.chieuRong}`);
  console.log(`Diện tích = ${hcn.tinhDienTich()}, Chu vi = ${hcn.tinhChuVi()}`);
  
  const hv = new HinhChuNhat(6, 6);
  console.log(`Hình vuông: Cạnh = ${hv.chieuDai}`);
  console.log(`Diện tích = ${hv.tinhDienTich()}, Chu vi = ${hv.tinhChuVi()}`);
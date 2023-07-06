class PhanSo {
  constructor(t, m) {
    this.tu = t;
    this.mau = m;
  }
  print() {
    console.log(this.tu, "/", this.mau);
  }

  add(second) {
    let mauchung = this.mau * second.mau; // this ~ ps1 ; second ~ ps2
    let tuchung = this.tu * second.mau + this.mau * second.tu;
    let ps = new PhanSo(tuchung, mauchung);
    return ps;
  }
}

let ps1 = new PhanSo(1, 2);
let ps2 = new PhanSo(1, 3);

ps3 = ps1.add(ps2); // ps1 + ps2
ps3.print();

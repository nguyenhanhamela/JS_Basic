// Viết chương trình in ra một số là số nguyên ban đầu với các chữ số bị đảo ngược thứ tự (bỏ các số 0 ở đầu nếu có). Ví dụ đầu vào 120 thì in ra 21 (không sử dụng hàm có sẵn)
// di tư phai sang trai
// moi lan in 1 ki tu
// den het
const n = 12030000;
const s = n.toString();

let kq = "";

for(let i = s.length - 1; i>=0;i--){
    kq += s[i];
}
console.log("kq = ",kq)
// Viết chương trình in ra một số là số nguyên ban đầu với các chữ số bị đảo ngược thứ tự (bỏ các số 0 ở đầu nếu có). Ví dụ đầu vào 120 thì in ra 21 (không sử dụng hàm có sẵn) 

const n = 12340;
const s = n.toString();

let kq = "";

for (let i = s.length - 1;i >=0;i--){
    console.log(s[i])
    if(s[i]!="0")
    kq += s[i];
}
console.log("kq=",kq)
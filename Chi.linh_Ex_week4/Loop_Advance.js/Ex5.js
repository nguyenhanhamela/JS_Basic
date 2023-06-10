//Viết chương trình in ra một số là số nguyên ban đầu với các chữ số bị đảo ngược thứ tự (bỏ các số 0 ở đầu nếu có). 
//Ví dụ đầu vào 120 thì in ra 21 (không sử dụng hàm có sẵn) 

const n = 1020;
let s = n.toString();
let ketqua = '';

for (let i = s.length - 1; i>= 0; i--){
    if (ketqua.length > 0)
       ketqua += s[i];
    else {
    if (s[i] !=0 )
        ketqua += s[i];
    }
}
    console.log('ketqua =', ketqua);

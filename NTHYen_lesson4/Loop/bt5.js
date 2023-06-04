// 5. Viết chương trình in ra một số là số nguyên ban đầu với các chữ số bị đảo ngược thứ tự 
// (bỏ các số 0 ở đầu nếu có). Ví dụ đầu vào 120 thì in ra 21 (không sử dụng hàm có sẵn)
function Daonguoc(a){
    var ar = a.toString();
    var b = "";
    for (var i = ar.length-1;i>=0; i--){
        b = b + ar[i]
    }
   console.log(parseInt(b))
}
Daonguoc(310)
// 4. Viết chương trình đảo ngược 1 chuỗi (không sử dụng hàm có sẵn)
function Daonguoc(a){
    var b = "";
    for (var i = a.length-1;i>=0; i--){
        b = b + a[i]
    }
   console.log(b)
}
Daonguoc("YEN")
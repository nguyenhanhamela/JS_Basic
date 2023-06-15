// Bài 1: viết hàm kiểm tra một số có phải số nguyên tố hay không? 
// hàm này nhận tham số đầu vào là 1 số tự nhiên và trả lại true nếu là số nguyên tố , false nếu không phải 
// số nguyên tố là số lớn hơn 1 và ước số là 1 và chính nó
 
function KtraSNT(x){
    if(x<2){
        return false
    }
    for(var i = 2; i<= Math.sqrt(x); i++){
        if(x%i == 0){
            return false
        }
    }
  return true
}
console.log(KtraSNT(4))
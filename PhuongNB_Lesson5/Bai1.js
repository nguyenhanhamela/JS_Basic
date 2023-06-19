/*Bài 1: viết hàm kiểm tra một số có phải số nguyên tố hay không? 
hàm này nhận tham số đầu vào là 1 số tự nhiên và trả lại true nếu là số nguyên tố , false nếu không phải */

function KtraNto (n){
    if (n < 2) {
        return false
    }
    for (let i = 2; i<n; i++){
        if (n % i === 0){
            return false
        } 
    }
    return true
}

console.log(KtraNto(2));
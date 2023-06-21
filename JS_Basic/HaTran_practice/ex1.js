//Bài 1: viết hàm kiểm tra một số có phải số nguyên tố hay không? hàm này nhận tham số đầu vào là 1 số tự nhiên và trả lại true nếu là số nguyên tố , false nếu không phải 


function SNT (a){
    for( let i=2; i<a; i++){
        if (a % i == 0){
            return false
        } 
    }
    return true
}
module.exports = SNT

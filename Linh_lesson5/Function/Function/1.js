//  viết hàm kiểm tra một số có phải số nguyên tố hay không? hàm này nhận tham số đầu vào là 1 số tự nhiên và trả lại true nếu là số nguyên tố , false nếu không phải 

function KiemTraSoNguyenTo(x)
{
    if(x <=1){
        console.log("1");
        return false;
    } 
    for (let i = 2; i < x; i++){
        if(x % i == 0){
            console.log("2", i);
            return false;
        }
    } 
    // console.log("Số nguyên tố là" + KiemTraSoNguyenTo)
    return true;
}

console.log(KiemTraSoNguyenTo(5))
// Bài 1: viết hàm kiểm tra một số có phải số nguyên tố hay không? hàm này nhận tham số đầu vào là 1 số tự nhiên và trả lại true nếu là số nguyên tố , false nếu không phải 
// Số nguyên tố 素数 = số tự nhiên, >1, chia hết cho 1 và chính nó
function soNguyenTo (n) {
    let result = ""
    let count = []
    if (n > 1) {
        for (let i = 1; i <= n; i++) {
            count.push(i)
        }
        let check = 0
        for (let j = 0; j < count.length; j++) {
            if (n % count[j] == 0) {
                check++
            }
        }
        if (check == 2) {
            result = true
        } else result = false
    } 
    return result
}
console.log(soNguyenTo(7));
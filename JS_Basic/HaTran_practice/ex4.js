// Bài 4: (khó) viết hàm kiểm tra một chuỗi có chứa chuỗi con hay không, 
// hàm này nhận tham số là 1 chuỗi cha và 1 chuỗi con, trả lại true nếu chuỗi con có xuất hiện trong chuỗi cha, 
// nếu ngược lại thì trả lại false. (không được dùng các hàm include của string) 

function checkChuoi(parent, child = null) {
    // dem ky tu cua parent
    // console.log('checkChuoi ', parent.length)
    // xoa child trong parent
    const newStr = parent.replace(child, '')
    if(newStr.length < parent.length){
        return true
    }
    return false
}


const a = 'abcdef'
console.log(checkChuoi(a, 'kkkk'))
// Bài 5: viết hàm tính ước chung lớn nhất của 2 số, hàm nhận đầu vào là 2 số tự nhiên dương, 
// trả lại ước chung lớn nhất của 2 số đó. 
// x là ước chung của a và b nếu a và b đều chia hết cho x  
// bài này yêu cầu tìm số lớn nhất trong các ước chung 

function TimUCLN(a,b){
    while(b !=0){
        var c = a%b
        a = b
        b = c
    }
    return a

}
console.log(TimUCLN(4,8))
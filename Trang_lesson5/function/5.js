// Bài 5: viết hàm tính ước chung lớn nhất của 2 số, hàm nhận đầu vào là 2 số tự nhiên dương, 
// trả lại ước chung lớn nhất của 2 số đó. 
// x là ước chung của a và b nếu a và b đều chia hết cho x  
// bài này yêu cầu tìm số lớn nhất trong các ước chung 

function timUocChungLonNhat(a, b) {
    //tim uoc chung
    let uocChung = []
    if (a > 0 && b > 0) {
        if (a > b) {
            for (let i = 1; i <= b; i++) {
                if (a % i == 0 && b % i == 0) {
                    uocChung.push(i)
                    // console.log("uocChung neu a>b" ,uocChung);
                }
            }
        } else if (a < b) {
            for (let i = 1; i <= a; i++) {
                if (a % i == 0 && b % i == 0) {
                    uocChung.push(i)
                    // console.log("uocChung neu a<b" ,uocChung);
                }
            }
        } else console.log("a hoac b khong phai so tu nhien duong");

    //tìm ước chung lớn nhất
    let uocChungLonNhat = uocChung[0]
    for (let j = 1; j < uocChung.length; j++) {
        if (uocChung[j] > uocChungLonNhat) {
            uocChungLonNhat = uocChung[j]
            // console.log('max',uocChungLonNhat);
        }
    }
        return uocChungLonNhat
    }
}
console.log(timUocChungLonNhat(20,10));

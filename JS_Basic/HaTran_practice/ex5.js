// Bài 5: viết hàm tính ước chung lớn nhất của 2 số, hàm nhận đầu vào là 2 số tự nhiên dương, trả lại ước chung lớn nhất của 2 số đó. 
// x là ước chung của a và b nếu a và b đều chia hết cho x  
// bài này yêu cầu tìm số lớn nhất trong các ước chung 

// x=10, y=15

//b1: tim so lon nhat trong 2 so x, y: 10, 15 => 15
// b2: tim uoc cua so b1 [1, 3, 5, 15]
// b3: dung vong lap voi mang uoc da tim duoc o b2 sau khi da sap xep giam dan
// b4: check xem so con lai chia het cho so nao

const uc = (x, y) => {
    let min = x < y ? x : y;
    for(let i = min; i >= 1; i--){
        if(x % i == 0 && y % i == 0){
            return i
        }
    }
    return null
}

const max = uc(36, 60)

console.log('UCLN cua x va y: ', max)



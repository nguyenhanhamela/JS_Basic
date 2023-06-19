//switch case dùng với trường hợp có ít nhất 3 điều kiện trở lên
// in ra tổng số ngày của 1 tháng sử dụng switch case
// nhược điểm:
// - Mỗi điều kiện p có 1 break
// - Biến trong switch phải là số nguyên và nắm rõ các case 

// VD: in ra số ngày của tháng
let month = 4;
switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(31);
        break;

        case 4:
        case 6:
        case 9:
        case 11:
            console.log(30);
        break;

        case 2:
            console.log(28);
        break;
}
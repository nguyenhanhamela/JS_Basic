//Switch case: cấu trúc điều khiển, dạng 1 câu lệnh lựa chọn
//Khác với if else: khoảng 1 2 điều kiện thì dùng if else, nhiều hơn 3 trở lên thì dùng switch case. k có nhiều khác biệt
//VD đề bài: in ra tổng số ngày của 1 tháng 
let month = 4;
switch (month){
    case 1:
    case 3:
    case 5: 
    case 7:
    case 8: 
    case 10:
    case 11: 
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
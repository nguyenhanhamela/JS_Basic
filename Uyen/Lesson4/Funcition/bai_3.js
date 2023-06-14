//kiểm tra số ngày của 1 tháng 

function chekNam(nam){
    if(nam % 100 == 0  && nam % 400 ==0){
        return true;
    }else if( nam % 4 ==0){
        return true;
    }else{
        return false;
    }
}

function checkDay(month, year) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            if (chekNam(year)) {
                return 29;
            }
            return 28;
        default:
            return 30;
    }
}

console.log(checkDay(2, 2020));
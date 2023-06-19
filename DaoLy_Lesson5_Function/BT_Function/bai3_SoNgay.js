function namNhuan(year){
    if(year%100==0){
        if(year%400==0){
            return true;
        }
        else return false;
    }
    else
    {
        if(year%4==0){
            return true;
        }else{
            return false;
        }
    }
}
function thang(month,year){
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:    
        case 12:
            console.log("Month "+month+" có 31 ngày");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Month "+month+" có 30 ngày");
            break;
        case 2:
            if(namNhuan(year)==true){
                console.log("Month "+month+" có 29 ngày");
            }else{
                console.log("Month "+month+" có 28 ngày")
            }
            break;
    }
}
thang(2,2000)
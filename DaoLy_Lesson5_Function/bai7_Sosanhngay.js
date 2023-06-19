function soSanh(date1,month1,year1,date2,month2,year2){
    if(year1<year2){
        return -1;
    }else if(year1>year2){
        return 1;
    }else{
        if(month1<month2){
            return -1;
        }else if(month1>month2){
            return 1;
        }else{
            if(date1<date2){
                return -1;
            }else if(date1>date2){
                return 1;
            }else{
                return 0;
            }
        }
    }
}
console.log("So sanh 2 date:",soSanh(1,8,2024,1,7,2024));
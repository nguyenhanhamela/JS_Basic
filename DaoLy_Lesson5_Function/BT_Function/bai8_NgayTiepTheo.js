function thoiGian (ngay,thang,nam) {
    thang31 = [1,3,5,7,8,10,12];
    thang30 = [4,6,9,11];
        if(thang == 2){
            if(ngay == nam%400==0?29:28){
                return "01"+(thang+1)+nam;
            }else{
                return (ngay+1)+thang+nam;
            }
        }else if(thang30.includes(thang)){
            if(ngay === 30){
                return "01"+(thang+1)+nam;
            }else{
                return (ngay+1) +"/"+thang+"/"+nam;

            }
        }else{
            if(ngay === 31){
                if(thang === 12){
                return "01"+"01"+(nam+1);
                }
                return "01"+(thang+1)+nam;
            }else{
                return (ngay+1) +"/"+thang+"/"+nam;
            } 
        }
}

console.log(thoiGian(19,6,2023));
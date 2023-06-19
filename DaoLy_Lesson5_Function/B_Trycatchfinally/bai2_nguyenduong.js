function chuoiKiTu(a,b){
    var dodai1 = 0;
    if(typeof a === 'string'&& typeof b === 'number'&& b>0){
        dodai1 = a.length;
        if(dodai1>b){
            console.log(a.slice(0,b));
        }else if (dodai1==b){
            console.log(a);
        }else{
            try{
                throw "Khong the in"
            }catch(e){
                console.log(e);
            }
        }
    }else{
        try{
            throw "Khong du dieu kien"
        }catch(e){
            console.log(e);
        }
    }
}
chuoiKiTu("HelloWorld",0)
   


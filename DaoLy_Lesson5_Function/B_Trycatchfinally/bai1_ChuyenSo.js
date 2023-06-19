function chuyenDoi(n){
    try{
        if(isNaN(n)==true){
            throw "khong phai chuoi so"
        }
        else{
            return parseInt(n);
        }
    }catch(e){
        return e;
    }finally{
        console.log("ket thuc");
    }
}
console.log("Chuyen doi chuoi:", chuyenDoi("acv"))
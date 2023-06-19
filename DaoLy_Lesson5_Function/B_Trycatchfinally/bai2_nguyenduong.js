function chuoiKiTu(a,b){
    try{
    if(typeof a !== 'string'|| typeof b !== 'number' || b<1){
        throw new Error("Khong du dieu kien")
    }
    return a.slice(0,b);
    }catch(Error){
            console.log(Error.message);
            return null;
    }finally{
        console.log("Hoan thanh chuong trinh cat chuoi");
    }
    }

console.log(chuoiKiTu("HelloWorld",-1))
   

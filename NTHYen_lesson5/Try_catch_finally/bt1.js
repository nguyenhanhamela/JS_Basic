// Viết hàm chuyển đổi một chuỗi thành số nguyên có sử dụng
//  try/catch/finally để xử lý ngoại lệ, sử dụng hàm isNaN trong JS trong khối try để ném ra lỗi 

function CD(a){
    try{
        var num = parseInt(a)
        if(isNaN(num)){
            throw new Error("error")
        }
    
    }
    catch(e){
        console.error(e)
    }
    finally{
        console.log("done")
    }
}
CD(2)
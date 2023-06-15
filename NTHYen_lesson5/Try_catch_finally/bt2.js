// Viết một hàm JavaScript nhận vào một chuỗi và một số nguyên dương n, 
// sau đó trả về một mảng chứa các phần tử của chuỗi với độ dài không vượt quá n. 
// Sử dụng try, catch và finally để xử lý lỗi và in ra thông báo tương ứng khi có lỗi xảy ra. 
// Ví dụ:  
//     Nếu đầu vào là (HelloWorld, n = 5) => in ra chuỗi Hello 
//     Nếu đầu vào là (HelloWorld, n = -1) => in ra null 
//     Nếu đầu vào là (10, n = 5) => in ra kết quả null 

function CD(a, n){
    try{
        if(n<0 || typeof n === "string"){
            throw new Error("null")
        }
    }
    catch(e){
        console.error(e)
    }
    finally{
        console.log(a.slice(0,n))
    }
}
CD("HelloWorld", 5)
// try {} ... catch (error)
// try {} ... finally {}
// try {} ... catch (error) {} ... finally -> cố gắng -> không thì -> finally là mặc định

function phepchia(a,b)
{
    return a/b;
}
//console.log(phepchia(10,0))
// let ketqua = phepchia(10,c)
// try{
//     console.log(ketqua);
// }
// catch (error) {
//     console.log(e.message);
// }
// finally {
//     console.log("Khong thuc hien duoc");
// }

// bai tap vi du
let jsonstr ='{"age":10,"class":"A"}'
try {
    var convertJson = JSON.parse(jsonstr)
    console.log(converJson.class);
    if(convertJson.class){
        console.log("tim thay class");
    } else {
        throw new Error ("Khong tim thay thuoc tinh")
    }
}
catch(e)
{
    console.log(e.message)
}
finally
{
    console.log("Khong the thuc hien");
}
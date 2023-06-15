
// let x = 10;
// try... catch
// try {
//     console.log(x);
// } catch(error) {
//     console.log("message: " + error.message);
//     // console.log("name: " + error.name);
// }


// console.log(x);
// try {} ... catch(error){}
// try {} ... finally{}

// try... finally
// try {
//     console.log(x);
// } finally {
//     console.log("thong bao loi la: ");
// }

// try..catch..finally
function phepchia(a, b) {
    return a/b;
}

// console.log(phepchia(10,0))
// let ketqua = phepchia(10,2)
// try {
//     console.log(ketqua);
//     throw new Error("in ra ket qua loi")
// } catch(e) {
//     console.log(e.message);
// } finally {
//     console.log("Không thực hiện được");
// }

let jsonstr = '{"age": 10, "class": "A"}'
try {
    var convertJson = JSON.parse(jsonstr)
    console.log(convertJson.class);
    if (convertJson.class) {
        console.log("tim thay class");
    } else {
        throw new Error("Không tìm thấy thuộc tính")
    }
}
catch(e) {
    console.log(e.message);
}
finally {
    console.log("khong the thuc hien");
}
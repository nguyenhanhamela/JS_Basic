//điều kiện là 1 tam giác : a > |b-c|, a < b+ c
//điều kiện là 1 tam giác đều a=b=c
//điều kiện là 1 tam giác cân a=bkhác 
function checkTamGiac(a, b, c) {
    if (a == b && b == c) {
        return "tam giac deu";
    } else if (a == b && b != c
        || b == c && a != c
        || a == c && b != c) {
        return "tam giac can";
    } else if (Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2)
        || Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2)
        || Math.pow(b, 2) == Math.pow(a, 2) + Math.pow(c, 2)) {
        return "tam giac vuong";
    } else if (a > Math.abs(b - c) && a < (b + c)) {
        return "tam giac thuong"
    } else {
        return "khong phai tam giac";
    }
}
console.log(checkTamGiac(3, 4, 4));
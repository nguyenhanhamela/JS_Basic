//Viết câu lệnh if/else để tìm ra dấu tích của 3 số x, y, z. Ví dụ: x = 3, y = 5, z = -1 thì log ra màn hình “Dấu là -”. Ví dụ: x = 1, y = 2, z = 3 thì log ra màn hình “Dấu là +” 
function dauCua3So(a, b, c) {
    if (a * b * c >= 0) {
        return "Dau +";
    } else {
        return "Dau -";
    }
}
console.log(dauCua3So(3, 5, 0));
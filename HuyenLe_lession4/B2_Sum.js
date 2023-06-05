//Viết chương trình tính tổng các số từ 1 đến n 
function Sum(n) {
    let tong = 0;
    for (let i = 1; i <= n; i++) {
        tong = i + tong;
    }
    console.log("tong cac so từ 1 đến ", n ,"là: ", tong)
}
Sum(5)
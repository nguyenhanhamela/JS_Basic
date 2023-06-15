// ví dụ về phép chia 2 số
function devide2so(a, b) {
    if (b === 0) {
        throw new Error("số chia = 0")
    }
    return a/b;
}

try {
    var result = devide2so(10,2)
    console.log("Kết quả: " + result);
} catch (error) {
    console.log("Xảy ra lỗi " + error.message);
} finally {
    return;
}
// console.log(devide2so(10,0))



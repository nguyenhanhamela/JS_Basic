//Sử dụng câu lệnh if/else để sắp xếp 3 số sau: x = 3, y = 6, z = 0. In log ra màn hình thứ tự 3 số đó

console.log(thutu3so(2, 5, 1));
function sort3so(a, b, c) {
    var s1, s2, s3; 
    if (a > b) {
        if (c > a) {
            s1 = b;
            s2 = a;
            s3 = c;
        } else {
            if (b > c) {
                s1 = c;
                s2 = b;
                s3 = a;
            } else {
                s1 = b;
                s2 = c;
                s3 = a;
            }
        }
    } else {
        if (c > b) {
            s1 = a;
            s2 = b;
            s3 = c;
        } else {
            if (a > c) {
                s1 = c;
                s2 = a;
                s3 = b;
            } else {
                s1 = a;
                s2 = c;
                s3 = b;
            }
        }
    }
    console.log(`thu tu cua 3 so la ${s1}, ${s2}, ${s3}`);
    console.log("thu tu cua 3 so la " + s1 + ", " + s2 + ", " + s3);
}
sort3so(3,6,0);
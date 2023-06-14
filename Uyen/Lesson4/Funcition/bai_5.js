function uocChung(a, b) {

    if (a % b == 0) {
        return b;
    } else {
        let ucln = 1;
        for (let i = 2; i < b; i ++) {
            if ( b % i == 0 && a % i == 0) {
                ucln = i;
            }
        }
        return ucln;
    }
   

}

console.log(uocChung(30, 9))

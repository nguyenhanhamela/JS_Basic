function getPrefixNumberIfElse(n) {
    if (n <= 0) {
        return "nhap so lon hon 0";
    }
    // nếu n = 1 => st
    // 2 => nd
    // 3 => rd,
    // 4 -> 20 => th
    // n > 21
    // + đuôi 1 là 1 là st
    // + đuôi 2 là nd
    // + đuôi 3 là rd
    // + đuôi còn lại là th
    if (n == 1) {
        return "st";
    } else if (n == 2) {
        return "nd";
    } else if (n == 3) {
        return "rd";
    } else if (4 <= n && n <= 20) {
        return "th";
    } else if (n % 10 == 1) {
        return "st";
    } else if (n % 10 == 2) {
        return "nd";
    } else if (n % 10 == 3) {
        return "rd";
    } else {
        return "th";
    }
}

console.log(getPrefixNumberIfElse(22));

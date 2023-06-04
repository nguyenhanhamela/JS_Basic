// 3. Viết chương trình tìm số lớn nhất trong 3 số

function timSoLonNhat(a, b, c) {
    let max = a; 
    if (b > max) { 
      max = b;
    }
    if (c > max) { 
      max = c;
    }
    return max;
  }
  console.log(timSoLonNhat(1, 2, 3)); 

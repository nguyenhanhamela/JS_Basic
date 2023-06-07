// 8. Viết chương trình in ra 10 số Fibonacci (số sau bằng tổng của 2 số trước) đầu tiên

function in10SoFibonacci() {
    let a = 0;
    let b = 1;
  
    for (let i = 0; i < 10; i++) {
      console.log(b);
      const temp = b;
      b += a;
      a = temp;
    }
  }
  in10SoFibonacci(); 
// 1. Viết chương trình in số thứ tự của số nguyên n (n > 0) 
// với hậu tố st, nd, rd hoặc th (làm bằng cả 2 cách if / else, switch / case)

// c1:
// function STT(n) {
//     let x = n % 10;
//     let y = n % 100;
  
//     switch (true) {
//       case x === 1 && y !== 11:
//         console.log(`${n}st`);
//         break;
//       case x === 2 && y !== 12:
//         console.log(`${n}nd`);
//         break;
//       case x === 3 && y !== 13:
//         console.log(`${n}rd`);
//         break;
//       default:
//         console.log(`${n}th`);
//         break;
//     }
//   }
//   STT(1)

//   c2:
    function STT(n) {
    let x = n % 10;
    let y = n % 100;
    
    if (x === 1 && y !== 11) {
      console.log(`${n}st`);
    } else if (x === 2 && y !== 12) {
      console.log(`${n}nd`);
    } else if (x === 3 && y !== 13) {
      console.log(`${n}rd`);
    } else {
      console.log(`${n}th`);
    }
  }
  STT(1);
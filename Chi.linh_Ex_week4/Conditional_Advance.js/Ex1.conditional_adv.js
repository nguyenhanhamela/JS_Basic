//Viết chương trình in số thứ tự của số nguyên n (n > 0) với hậu tố st, nd, rd hoặc th (làm bằng cả 2 cách if / else, switch / case) 

//Cách 1: if/else

function getOrdinal(n) {
  let ord = 'th';

  if (n % 10 == 1 && n % 100 != 11)
  {
    ord = 'st';
  }
  else if (n % 10 == 2 && n % 100 != 12)
  {
    ord = 'nd';
  }
  else if (n % 10 == 3 && n % 100 != 13)
  {
    ord = 'rd';
  }

  return ord;
}


//Cách 2: switch/case
 



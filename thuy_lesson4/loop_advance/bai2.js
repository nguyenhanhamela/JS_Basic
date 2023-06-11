/**2. Viết chương trình tính tổng các số từ 1 đến n */
let n = 5;
console.log(`Cho n = ${n}`);
let sumN = 0;
let arrN = [];
for (let i = 1; i <= n; i++) {
  arrN.push(i);
}
console.log(`Cac so tu 1 den n la: ${arrN}`);
for (const j of arrN) {
  sumN += j;
}
console.log(`Tong cac so tu 1 den n la: ${sumN}`);

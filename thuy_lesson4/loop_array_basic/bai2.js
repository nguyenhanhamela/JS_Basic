/**2. Cho mảng sau: B = [13,23,12,45,22,48,66,100].
 * Sử dụng for để log ra màn hình các số chẵn trong mảng B */

let B = [13, 23, 12, 45, 22, 48, 66, 100];
let sochan = [];

for (const x of B) {
  if (x % 2 == 0) {
    sochan.push(x);
  }
}
console.log(`Cac so chan la: ${sochan}`);

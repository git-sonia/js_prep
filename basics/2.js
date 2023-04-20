let num = 4936;
num = String(num);
console.log(`${num[0]} ${num[1]} ${num[2]} ${num[3]}`);

let digits = [];
if (num === 0) {
  digits.push(0);
}
while (num > 0) {
  digits.unshift(num % 10);
  num /= 10;
  num = parseInt(num);
}
console.log(digits.join(' '));



let oddLengths = arr => arr.reduce((oddArr, value) => {
  if (value.length % 2 !== 0) {
    oddArr.push(value.length);
  }
  return oddArr;
}, []);

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

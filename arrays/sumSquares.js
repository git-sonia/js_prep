let sumOfSquares = arr => arr.reduce((sum, value) => sum += value ** 2, 0);

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

let isNotANumber = value => !(value === value);

console.log(isNotANumber(NaN));
console.log(isNotANumber(4));

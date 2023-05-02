let isNegativeZero = value => -Infinity === 1/value;

console.log(isNegativeZero(0), isNegativeZero(-0), isNegativeZero(1));


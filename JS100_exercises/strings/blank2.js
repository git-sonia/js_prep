let isBlank = str => console.log(str.trim().length === 0);

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true

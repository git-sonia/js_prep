let removeLastChar = str => str.split("").splice(0, str.length - 1).join("");

console.log(removeLastChar('ciao!')); // 'ciao'
removeLastChar('hello'); // 'hell'

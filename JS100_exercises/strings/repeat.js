let repeat = (times, word) => {
  let string = '';
  for (let i = 0; i < times; i++) {
    string += word;
  }
  console.log(string);
}

repeat(3, 'ha'); // 'hahaha'

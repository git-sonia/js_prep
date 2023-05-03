let localGreet = (code) => {
  let language = extractLanguage(code);
  let region = extractRegion(code);

  switch (language) {
    case 'en': return greetEnglish(region);
    case('fr'): return 'salut';
    default: return 'hey';
  }
}

let greetEnglish = area => {
  switch (area) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
  }
}

let extractRegion = code => code.split('_')[1].split('.')[0];

let extractLanguage = code => code.substring(0, 2);

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Howdy!'

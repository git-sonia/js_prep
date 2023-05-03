let greet = language => {
  switch (language) {
    case 'en': return 'hi';
    case('fr'): return 'salut';
    default: return 'hey';
  }
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'

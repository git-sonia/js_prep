function greet(greeting) {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet(undefined);              // logs: undefined, world!
                      // should log: Hello, world!

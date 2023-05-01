function foo(bar) {
  console.log(bar());
}

let bar = msg => () => msg;

foo(bar('w'));    // Should print 'Welcome'



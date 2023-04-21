let age = prompt("How old are you? ");
console.log(`You are ${age} years old.`);
for (let yearsPassed = 10; yearsPassed <= 40; yearsPassed += 10) {
  console.log(`In ${yearsPassed} years, you will be ${age + yearsPassed} years old.`);
}

let catAge = age => {
  if (age === 0) return 0;
  if (age === 1) return 15;
  if (age === 2) return 24;
  return 24 + (age - 2) * 4;
}

console.log(catAge(15));
catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32

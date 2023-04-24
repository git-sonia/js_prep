let evenOrOdd = num => {
  if (!Number.isInteger(num)) {
    console.log("Not an integer");
    return;
  }

  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

function calculateAverage(numbers) {
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 5]));

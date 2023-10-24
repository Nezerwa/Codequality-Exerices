function calculateAverage(numbers) {
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  return sum / numbers.length;
}


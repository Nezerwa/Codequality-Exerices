function isPrimeNumber(number) {
  if (number < 2) return false;
  if (number === 2) return true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
    return true;
  }
}

console.log(isPrimeNumber(11));

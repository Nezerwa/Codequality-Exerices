function convertRoman(roman) {
  const romansNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const romanDigits = roman.split("");
  return romanDigits.reduce((acc, curr, index) => {
    if (romansNumerals[curr] < romansNumerals[romanDigits[index + 1]]) {
      return acc - romansNumerals[curr];
    }
    return acc + romansNumerals[curr];
  }, 0);
}

console.log(convertRoman("MMVIII"));

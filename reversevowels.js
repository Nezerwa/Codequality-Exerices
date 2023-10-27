function reverseVowels(str) {
  const vowelsPattern = /[aeiou]/gi;
  const vowels = str.match(vowelsPattern);
  const newArray = str.split("");
  let reversed;
  newArray.forEach((char) => {
    reversed = str.replace(vowelsPattern, 'j');
  });
  console.log(reversed);
}

console.log(reverseVowels("hello"));

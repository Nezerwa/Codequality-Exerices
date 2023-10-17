const createPhoneNumber = (numbers) => {
  const convertToString = numbers.join("");

  // Add brackets and - in our phone number
  const newPhoneNumber = `(${convertToString.slice(
    0,
    3
  )}) ${convertToString.slice(3, 6)}-${convertToString.slice(6, 10)}`;
  return newPhoneNumber;
};
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

const createPhoneNumber = (numbers) => {
  let phoneNumber = "(xxx) xxx-xxxx";
  numbers.forEach((number) => {
    phoneNumber = phoneNumber.replace("x", number);
  });
  return phoneNumber;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

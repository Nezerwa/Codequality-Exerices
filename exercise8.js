function discount(totalamount) {
  let discount;
  if (totalamount > 100) {
    discount = totalamount * 0.1;
  } else {
    discount = totalamount * 0.05;
  }
  return discount;
}

function discount(totalamount) {
  let disc;
  if (totalamount > 100) {
    disc = totalamount * 0.1;
  } else {
    disc = totalamount * 0.05;
  }
  return disc;
}

function flattenArray(array) {
  let flattened = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      flattened = flattened.concat(flattenArray(element));
    } else {
      flattened.push(element);
    }
  }
  return flattened;
}

const removeDuplicates = (arr) => {
  const duplicateFree = new Set(arr);
  return [...duplicateFree];
};


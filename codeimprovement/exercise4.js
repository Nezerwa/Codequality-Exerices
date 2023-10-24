// Dirty code
function findEvenNumbers(numbers) {
const evenNumbers = numbers.filter((number)=> number % 2 === 0)
return evenNumbers
}

console.log(findEvenNumbers([2, 3, 5, 6, 8]));

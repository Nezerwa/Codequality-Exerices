 const numberFormat = function (number) {
const format = number.toLocaleString();
return format.toString();
};
console.log(numberFormat(5678545));
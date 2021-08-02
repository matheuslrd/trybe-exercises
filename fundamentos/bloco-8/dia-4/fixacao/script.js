const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getPairs = numbers.filter((num) => num % 2 === 0);
const sumPairs = (result, number) => result + number;

const showSumPairs = numbers.reduce(sumPairs);

console.log(showSumPairs);
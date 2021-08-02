const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//Pega os números pares
const arrGetPairs = numbers.filter((num) => num % 2 === 0);

//FUnção para somar todos numeros de um array
const sumPairs = (result, number) => result + number;
const showSumPairs = (array) => array.reduce(sumPairs);

console.log(showSumPairs(arrGetPairs));
const numbers = [11, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  // Adiciona seu código aqui
  if (number % 3 === 0) {
    return number;
  } else if (number % 5 === 0) {
    return number;
  }
}

const divisible = numbers.find(findDivisibleBy3And5);

console.log(divisible);
const returnPositiveNegativeOrNeutral = (number) => {
  if(number > 0) {
    return 'Positivo';
  } else if(number < 0) {
    return 'Negativo';
  } else {
    return 'Neutro';
  }
}

console.log(returnPositiveNegativeOrNeutral(-1));

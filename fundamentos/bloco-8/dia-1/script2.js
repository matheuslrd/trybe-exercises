const resultRaffle = (apostado, callback) => {
  const numSorteado = Math.ceil(Math.random() * 5);
  return callback(apostado, numSorteado);
};

const checkResult = (a, b) => a === b ? 'Parábens, você ganhou!' : 'Tente novamente!';
console.log(resultRaffle(3, checkResult));
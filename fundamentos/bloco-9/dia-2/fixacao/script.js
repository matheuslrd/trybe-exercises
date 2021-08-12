const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11 );
  
  if (number <= 5) {
    return reject(number);
  }

  resolve(number);
})
  .then(number => `Muito bem cara :D, ${number} é maior que 5!`)
  .then(msg => console.log(msg))
  .catch(number => console.log(`Que pena, o número ${number} não é maior que 5!`));

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Maçã', 'Melão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Melancia', 'Uva', 'Laranja'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const fruits = [...fruit, ...additional];
  return fruits;
};

console.log(fruitSalad(specialFruit, additionalItens));
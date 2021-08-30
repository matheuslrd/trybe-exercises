const myRemove = require('../js/exercise2');

describe('Função myRemove recebe e retorna um array sem o item passado', () => {

  test('Função recebe ([1, 2, 3, 4], 3) e retorna um array sem o número 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Função recebe ([1, 2, 3, 4], 3) e NÃO retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
});
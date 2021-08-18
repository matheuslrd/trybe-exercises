const sum = require('../js/exercise1');

describe('Valida os retornos', () => {
  test('A função recebe (4, 5) e retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('A função recebe (0, 0) e retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('A função recebe (0, "5") e lança um erro', () => {
    expect(() => sum(4, '5')).toThrow();
  });

  test('Testa se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => sum(4, 5)).toThrowError(new Error('parameters must be numbers'));
  })
});
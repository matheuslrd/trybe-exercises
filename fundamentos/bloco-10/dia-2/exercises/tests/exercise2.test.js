const {
  getUserName
} = require('../js/exercise2');

describe('Verificando o resultado da função getUserName()', () => {

  it('Usuário 1 encontrado e o nome ser Mark', () => {
    expect.assertions(1);
    return getUserName(1).then((user) => expect(user).toEqual('Mark'));
  })

  it('Devolve erro de passado (3)', () => {
    return getUserName(3)
    .catch((error) => 
    expect(error.message).toEqual('User with 2 not found.'));
  });

});
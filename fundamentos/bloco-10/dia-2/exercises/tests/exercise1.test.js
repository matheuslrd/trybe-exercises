const uppercase = require('../js/exercise1');

describe('Verifica função uppercase', () => {

  it('Verifica se a palavra é maiúscula', (done) => {
    uppercase('matheus', (string) => {
      try {
        expect(string).toBe('MATHEUS');
        done();
      } catch(error) {
        done(error);
      }
    })
  })
});
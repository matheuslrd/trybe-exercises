const assert = require('assert');

const peoples = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filterPeople = (arr) => { 
  return arr.filter(({bornIn, nationality}) => bornIn >= 1900 && bornIn < 2000 && nationality === 'Australian');
};
const filteredPeople = filterPeople(peoples);

assert.deepStrictEqual(filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });
assert.deepStrictEqual(filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' });
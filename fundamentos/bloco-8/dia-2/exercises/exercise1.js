const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
function authorBornIn1947() {
  // escreva aqui o seu código
  const searchAuthorForBirthYears = books.find((livro) => livro.author.birthYear === 1947);
  return searchAuthorForBirthYears.author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');

function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((livro) => {
    if(!nameBook || livro.name.length < nameBook.length) {
      nameBook = livro.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
assert.strictEqual(smallerName(), 'Duna');

const expectedResultt = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  let book26caractere;

  books.find((livro) => {
    if (livro.name.length === 26) {
      book26caractere = livro;
    }
  });
  return book26caractere;
}

assert.deepStrictEqual(getNamedBook(), expectedResultt);

const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort( (a, b) => {
    if (a.releaseYear > b.releaseYear) {
      return -1;
    } else if (a.releaseYear < b.releaseYear) {
      return 1;
    } 
    return 0;
  });
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

const expectedResultttt = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  const verifiedXX = books.every((livro) => {
    livro.author.birthYear > 1899 && livro.author.birthYear < 2000 ? true : false;
  });

  return verifiedXX;
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResultttt);

const expectedResultl = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  const verifiedRelease80s = books.some((livro) => livro.releaseYear >= 1980 && livro.releaseYear < 1990);

  return verifiedRelease80s;
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResultl);
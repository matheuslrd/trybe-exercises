const readline = require('readline-sync');

const firstName = readline.question('Qual seu nome? ');
const lastName = readline.question('Qual seu sobrenome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Olá ${firstName} ${lastName}! Você tem ${age} anos!`);
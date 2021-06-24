let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/***********************
  Exercicio Número 1
***********************
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}   

*/


/***********************
  Exercicio Número 2
***********************
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    result = result + numbers[index];
}

console.log(result);

*/

/***********************
  Exercicio Número 3
***********************

let result = 0;
let contNumbers = numbers.length;

for(let index = 0; index < contNumbers; index += 1) {
    result += numbers[index];
}

let media = result / contNumbers;

console.log('A média de numeros do Array : ' + numbers + ' é ' + media + ' !')

*/

/***********************
  Exercicio Número 4
***********************

let result = 0;
let contArrayNumbers = numbers.length;


for(let index = 0; index < contArrayNumbers; index += 1) {
    result += numbers[index];
}

let media = result / contArrayNumbers;

if( media > 20){
    console.log('Valor é maior que 20! O valor é: ' + media);
} else {
    console.log('O valor é menor que 20! O valor é: ' + media);
}

*/

/***********************
  Exercicio Número 5
***********************/

let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    let guardarNumero = numbers[index];

    if(guardarNumero > maiorNumero) {
        maiorNumero = guardarNumero;
    }
}

console.log(maiorNumero);



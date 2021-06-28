let n = 5;
let symbol = '*';
let line = '';

/*
for (let index = 0; index < n; index += 1) {
    line = line + symbol;
}

for( let index2 = 0; index2 < n; index2 += 1) {
    console.log(line);
}  */

/***************
 * Exercicio 2
 ***************

for (let index = 0; index < n; index += 1) {
    line = line + symbol;

    console.log(line);
}
 
*/

/***************
 * Exercicio 3
 ***************/

let rowBlank =  '';

for (let index = 0; index < n; index += 1) {
    line += symbol;

    for(let i = 4; i >= 1; i -= 1) {  
        rowBlank += '';
    }
    console.log(rowBlank, line);
}

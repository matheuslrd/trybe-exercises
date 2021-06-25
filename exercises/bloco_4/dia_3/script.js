let n = 5;
let symbol = '*';
let line = '';

for (let index = 0; index < n; index += 1) {
    line = line + symbol;
}

for( let index2 = 0; index2 < n; index2 += 1) {
    console.log(line);
}
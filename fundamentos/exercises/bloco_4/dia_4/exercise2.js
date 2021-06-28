function verificaPalindromo(palavra) {
    let palavraInvertida = palavra.split('').reverse().join('');

    let palavraMaiuscula = palavra.toUpperCase();
    let palavraInvertidaMaiuscula = palavraInvertida.toUpperCase();

    if(palavraMaiuscula === palavraInvertidaMaiuscula) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindromo('Arara'));





function verificaMaiorIndice(array) {
    let maiorIndice = 0;

    for (let index = 0; index < array.length; index += 1) {
        let guardarIndice = array[index];

        if(guardarIndice > maiorIndice) {
            maiorIndice = guardarIndice;
        }
    }
    return array.indexOf(maiorIndice);
}

console.log(verificaMaiorIndice([3, 5, 12, 8, 4, 13, 17]));

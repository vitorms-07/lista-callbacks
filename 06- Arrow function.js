function processarNumero(numero, callback) {
    callback(numero);
}

processarNumero(4, (num) => console.log(`O triplo de ${num} é ${num * 3}`));
processarNumero(7, (num) => console.log(`O triplo de ${num} é ${num * 3}`));
processarNumero(10, (num) => console.log(`O triplo de ${num} é ${num * 3}`));

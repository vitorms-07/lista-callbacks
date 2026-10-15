function somar (a,b) {
    return a + b;
}
function multiplicar (a,b) {
    return a * b;
}
function calcular (a,b,operação) {
    const resultado = operação(a, b);
    console.log(`O resultado é: ${resultado}`);
    return resultado;
}

console.log("calcular soma")
calcular(15, 15, somar);

console.log("calcular multiplicação")
calcular(5, 3, multiplicar);

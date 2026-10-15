function repetirAcao(vezes, callback) {
    for (let i = 1; i <= vezes; i++) {
        callback(i);
    }
}

repetirAcao(4, (numero) => {
    console.log(`Execução número ${numero}`);
});

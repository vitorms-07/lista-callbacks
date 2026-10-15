const produtos = ['Teclado', 'Mouse', 'Monitor', 'Cadeira Gamer', 'Headset'];

function exibirProduto(produto) {
    console.log(`Produto: ${produto}`);
}

// Passando a função exibirProduto como callback para o forEach
produtos.forEach(exibirProduto);

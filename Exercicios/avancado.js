// let produtos = [
//     { nome: 'produto 01', valor: 999.90 },
//     { nome: 'produto 02', valor: 430.00 },
//     { nome: 'produto 03', valor: 1999.90 },
//     { nome: 'produto 04', valor: 2799.70 },
//     { nome: 'produto 05', valor: 99.90 }
// ];

// function imprimirListaProdutos(titulo, produtos) {
//     document.write(`<h3>${titulo}</h3>`);

//     document.write('<ul>');

//     produtos.forEach(produto => {
//         document.write(`<li>${produto.nome} - R$${produto.valor.toFixed(2)}</li>`)
//     })

//     document.write('</ul>')
// }

// let filtroProdutosValorMenorQueMil = (produto) => {
//     return produto.valor < 1000;
// };
// let filtroProdutosValorMaiorIgualMil = (produto) => {
//     return produto.valor >= 1000;
// };

// let produtosMenorQueMil = produtos.filter((produto) => { return produto.valor < 1000 });
// let produtosMaiorIgualMil = produtos.filter(filtroProdutosValorMaiorIgualMil);

// imprimirListaProdutos('Produtos Valor abaixo de R$1000, 00', produtosMenorQueMil);
// imprimirListaProdutos('Produtos Valor a partir de R$1000,00', produtosMaiorIgualMil);

let produtos = [
    { nome: 'produto 01', precoCusto: 25.90 },
    { nome: 'produto 02', precoCusto: 215.00 },
    { nome: 'produto 03', precoCusto: 999.90 },
    { nome: 'produto 04', precoCusto: 799.70 },
    { nome: 'produto 05', precoCusto: 35.90 }
];

function gerarProdutoComPrecoDeVenda(produto, indiceMultiplicador) {
    return {
        nome: produto.nome,
        precoCusto: produto.precoCusto,
        precoVenda: produto.precoCusto * indiceMultiplicador
    }
}

function gerarListaProdutosComPrecoDeVenda(produtos, indiceMultiplicador) {
    return produtos.map(produto => {
        return gerarProdutoComPrecoDeVenda(produto, indiceMultiplicador);
    })
}
function imprimirListaComPrecoVenda(produtos,
    indiceMultiplicador) {
    let produtosComPrecoDeVenda = gerarListaProdutosComPrecoDeVenda(produtos, indiceMultiplicador);
    document.write('<ul>');
    produtosComPrecoDeVenda.forEach(produto => {
        document.write(`<li><strong>nome:</strong>${produto.nome}<strong>custo:</strong>R$ ${produto.precoCusto.toFixed(2)}<strong>valorVenda:</strong>R$${produto.precoVenda.toFixed(2)}</li>`)
    })
    document.write('</ul>')
}

imprimirListaComPrecoVenda(produtos, 2.5) 
// let lista = ['joão', 'maria', 'adão', 'eva'];

// for (i = 0; i <= lista.length - 1; i++) {
//     document.write(lista[i] + ' está na posição ' + i + '</br>');
// }

// document.write('-----------------------------</br>')

// let posicao = lista.indexOf('maria');

// if (posicao > 0) {
//     lista[posicao] = 'berenice';
// }

// for (i = 0; i <= lista.length - 1; i++) {
//     document.write(lista[i] + ' está na posição ' + i + '</br>');
// }

// document.write('-----------------------------</br>')

// lista.splice(2, 1);

// for (i = 0; i <= lista.length - 1; i++) {
//     document.write(lista[i] + ' está na posição ' + i + '</br>');
// }


//ex1
// function Aluno(nome, nota) {
//     this.nome = nome;
//     this.nota = nota;
// }

// var alunos = [];

// for (i = 0; i <= 2; i++) {
//     let nome = prompt('Insira seu nome');
//     let nota = prompt('Insira sua nota');

//     let inserir = nome + ' ' + nota;
//     alunos.push(inserir);
// }

// for (i = 0; i <= alunos.length - 1; i++) {
//     document.write(alunos[i] + '</br>');
//     document.write('<p> Nome: ' + alunos[i].nome + ' Nota: ' + alunos[i].nota + '</p>')
// }

// console.log(alunos);

//ex2
// const notas = [];

// for (i = 0; i <= 3; i++) {
//     let nota = prompt('Insira uma nota');
//     notas.push(parseFloat(nota));
// }

// //  3, 1, 5, 7, 8, 10, 4

// let maiorAux = Number.MIN_VALUE;
// let menorAux = Number.MAX_VALUE;

// for (i = 0; i <= notas.length - 1; i++) {
//     if (notas[i] > maiorAux)
//         maiorAux = notas[i];
//     if (notas[i] < menorAux)
//         menorAux = notas[i]
// }

// document.write(`<p>${maiorAux}</p>`);
// document.write(`<p>${menorAux}</p>`);

//ex3

function Produto(nome, valor) {
    this.valor = valor;
    this.nome = nome;
    this.toString = function () {
        return 'Nome: ' + this.nome + ' Valor: ' + this.valor
    };
}

const produtos = [];
const precosAcimaDaMedia = []
const precosAbaixoDaMedia = []
var precoTotal = 0;
var media = 0;

for (i = 0; i <= 3; i++) {
    let nome = prompt('Insira o nome do produto');
    let valor = prompt('Insira o valor do produto');
    produtos.push(new Produto(nome, parseFloat(valor)));
}

for (i = 0; i <= produtos.length - 1; i++) {
    precoTotal += produtos[i].valor;
}

media = precoTotal / produtos.length;

for (i = 0; i <= produtos.length - 1; i++) {
    if (produtos[i].valor > media)
        precosAcimaDaMedia.push(produtos[i]);
    if (produtos[i].valor < media)
        precosAbaixoDaMedia.push(produtos[i]);
}

document.write('Produtos acima da média: ' + media);
for (i = 0; i <= precosAcimaDaMedia.length - 1; i++) {
    document.write(`<p>${'Nome: ' + precosAcimaDaMedia[i].nome + ' Valor: ' + precosAcimaDaMedia[i].valor}</p>`);
}
document.write('Produtos abaixo da média: ' + media);
for (i = 0; i <= precosAbaixoDaMedia.length - 1; i++) {
    document.write(`<p>${precosAbaixoDaMedia[i].toString()}</p>`);
}



var x = (a, b) => {
    returna + b;
}
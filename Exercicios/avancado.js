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

// let produtos = [
//     { nome: 'produto 01', precoCusto: 25.90 },
//     { nome: 'produto 02', precoCusto: 215.00 },
//     { nome: 'produto 03', precoCusto: 999.90 },
//     { nome: 'produto 04', precoCusto: 799.70 },
//     { nome: 'produto 05', precoCusto: 35.90 }
// ];

// function gerarProdutoComPrecoDeVenda(produto, indiceMultiplicador) {
//     return {
//         nome: produto.nome,
//         precoCusto: produto.precoCusto,
//         precoVenda: produto.precoCusto * indiceMultiplicador
//     }
// }

// function gerarListaProdutosComPrecoDeVenda(produtos, indiceMultiplicador) {
//     return produtos.map(produto => {
//         return gerarProdutoComPrecoDeVenda(produto, indiceMultiplicador);
//     })
// }
// function imprimirListaComPrecoVenda(produtos,
//     indiceMultiplicador) {
//     let produtosComPrecoDeVenda = gerarListaProdutosComPrecoDeVenda(produtos, indiceMultiplicador);
//     document.write('<ul>');
//     produtosComPrecoDeVenda.forEach(produto => {
//         document.write(`<li><strong>nome:</strong>${produto.nome}<strong>custo:</strong>R$ ${produto.precoCusto.toFixed(2)}<strong>valorVenda:</strong>R$${produto.precoVenda.toFixed(2)}</li>`)
//     })
//     document.write('</ul>')
// }

// imprimirListaComPrecoVenda(produtos, 2.5) 

// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. 
// Faça um programa que calcule e escreva:
// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// o número de homens.

// function Pessoa(altura, sexo) {
//     this.altura = altura;
//     this.sexo = sexo;
// }

// const listaPessoas = new Array();

// listaPessoas.push(new Pessoa(1.60, 'M'));
// listaPessoas.push(new Pessoa(1.74, 'F'));
// listaPessoas.push(new Pessoa(1.80, 'M'));
// listaPessoas.push(new Pessoa(1.60, 'M'));
// listaPessoas.push(new Pessoa(1.71, 'F'));
// listaPessoas.push(new Pessoa(1.82, 'F'));
// listaPessoas.push(new Pessoa(1.85, 'M'));
// listaPessoas.push(new Pessoa(1.90, 'M'));
// listaPessoas.push(new Pessoa(2.00, 'F'));
// listaPessoas.push(new Pessoa(1.50, 'M'));
// listaPessoas.push(new Pessoa(1.77, 'F'));
// listaPessoas.push(new Pessoa(1.80, 'M'));
// listaPessoas.push(new Pessoa(1.68, 'F'));
// listaPessoas.push(new Pessoa(1.92, 'M'));
// listaPessoas.push(new Pessoa(1.57, 'F'));
// listaPessoas.push(new Pessoa(1.62, 'M'));

// function Executar() {
//     document.write('A maior altura do grupo é: ' + getMaiorAltura(listaPessoas))
//     document.write('</br>')
//     document.write('A menor altura do grupo é: ' + getMenorAltura(listaPessoas))
//     document.write('</br>')
//     document.write('A média de altura das mulheres é: ' + MediaAlturaMulheres(listaPessoas))
//     document.write('</br>')
//     document.write('O total de homens no grupo é: ' + NumeroDeHomens(listaPessoas))
// }

// function getMaiorAltura(lista) {
//     let aux = Number.MIN_VALUE;
//     for (i = 0; i <= lista.length - 1; i++) {
//         if (lista[i].altura > aux)
//             aux = lista[i].altura;
//     }
//     return aux;
// }

// function getMenorAltura(lista) {
//     let aux = Number.MAX_VALUE;
//     for (i = 0; i <= lista.length - 1; i++) {
//         if (lista[i].altura < aux)
//             aux = lista[i].altura;
//     }
//     return aux;
// }

// function separaMulheres(pessoa) {
//     return pessoa.sexo == 'F'
// }

// function MediaAlturaMulheres(lista) {
//     let total = 0;
//     let listaMulheres = new Array();

//     let mulheres = lista.filter((pessoa) => separaMulheres(pessoa));

//     for (i = 0; i <= lista.length - 1; i++)
//         if (lista[i].sexo == 'F')
//             listaMulheres.push(lista[i]);

//     for (i = 0; i <= mulheres.length - 1; i++)
//         total += mulheres[i].altura;

//     let teste = mulheres.reduce((totalValue, currentValue) => {
//         return totalValue + currentValue.altura;
//     }, 0);

//     return (total / mulheres.length).toFixed(2);
// }

// function NumeroDeHomens(lista) {
//     let homens = lista.filter((pessoa) => {
//         return pessoa.sexo == 'M'
//     });
//     return homens.length;
// }

// Executar();

// Cada espectador de um cinema respondeu a um questionário no qual 
//constava sua idade e a sua opinião em relação ao filme: 
//ótimo - 3, bom - 2, regular -1.
// Faça um programa que receba a idade e a opiriião de 15 espectadores, 
//calcule e imprima:
// a média das idades das pessoas que responderam ótimo;
// a quantidade de pessoas que responderam regular;
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

// function Questionario(idade, opiniao) {
//     this.idade = idade;
//     this.opiniao = opiniao
//     this.opiniaoString = function () {
//         switch (this.opiniao) {
//             case 1:
//                 return 'Regular';
//                 break;
//             case 2:
//                 return 'Bom'
//                 break;
//             case 3:
//                 return 'Ótimo';
//                 break;
//         }
//     }
// }

// const respostas = new Array();

// respostas.push(new Questionario(18, 1));
// respostas.push(new Questionario(20, 3));
// respostas.push(new Questionario(30, 2));
// respostas.push(new Questionario(27, 3));
// respostas.push(new Questionario(57, 1));
// respostas.push(new Questionario(27, 3));
// respostas.push(new Questionario(50, 2));
// respostas.push(new Questionario(43, 1));
// respostas.push(new Questionario(82, 2));
// respostas.push(new Questionario(54, 1));
// respostas.push(new Questionario(16, 1));
// respostas.push(new Questionario(15, 2));
// respostas.push(new Questionario(31, 3));
// respostas.push(new Questionario(21, 1));
// respostas.push(new Questionario(27, 2));
// respostas.push(new Questionario(24, 2));

// function Executar(){
//     document.write('A média de idade das pessoas que responderam otimo é: ' + mediaIdadePessoasResponderamOtimo(respostas));
//     document.write('</br>');
//     document.write('A quantidade de pessoas que responderam regular: ' + TotalPessoasResponderamRegular(respostas));
//     document.write('</br>');
//     document.write('Porcentagem das pessoas que responderam bom: ' + PorcentagemPessoasResponderamBom(respostas));
// }

// function mediaIdadePessoasResponderamOtimo(lista) {
//     let pessoas = lista.filter((questionario) => {
//         return questionario.opiniaoString() == 'Ótimo'
//     });

//     let totalIdade = pessoas.reduce((totalValue, currentValue) => {
//         return totalValue + currentValue.idade;
//     }, 0);

//     return (totalIdade / pessoas.length).toFixed(2);
// }

// function TotalPessoasResponderamRegular(lista) {
//     let pessoas = lista.filter((questionario) => {
//         return questionario.opiniaoString() == 'Regular'
//     });

//     return pessoas.length;
// }

// function PorcentagemPessoasResponderamBom(lista) {
//     let pessoas = lista.filter((questionario) => {
//         return questionario.opiniaoString() == 'Bom'
//     });

//     return ((pessoas.length * 100) / lista.length);
// }

// Executar();

// Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
// total de homens;
// total de mulheres;
// média das idades dos homens;
// média dos pesos das mulheres.

// function Pessoa(idade, peso, sexo) {
//     this.idade = idade;
//     this.peso = peso;
//     this.sexo = sexo;
// }

// const pessoas = new Array();

// pessoas.push(new Pessoa(17, 74.5, 'M'));
// pessoas.push(new Pessoa(15, 63, 'M'));
// pessoas.push(new Pessoa(28, 58.2, 'F'));
// pessoas.push(new Pessoa(39, 75, 'M'));
// pessoas.push(new Pessoa(57, 88, 'F'));
// pessoas.push(new Pessoa(72, 49, 'F'));
// pessoas.push(new Pessoa(20, 70, 'M'));
// pessoas.push(new Pessoa(19, 74.5, 'F'));
// pessoas.push(new Pessoa(14, 63.7, 'M'));
// pessoas.push(new Pessoa(28, 70.7, 'F'));
// pessoas.push(new Pessoa(19, 100.6, 'M'));

// function executar() {
//     document.write('O total de homens é: ' + homens(pessoas).length);
//     document.write('</br>');
//     document.write('O total de muheres é: ' + mulheres(pessoas).length);
//     document.write('</br>');
//     document.write('A média de idade dos homens é: ' + mediaIdadeHomens(pessoas));
//     document.write('</br>');
//     document.write('A média de peso das mulheres é: ' + mediaPesoMulheres(pessoas));
// }

// function homens(listaPessoas) {
//     return listaPessoas.filter((pessoa) => filtrarPessoas(pessoa, 'M'));
// }

// function mulheres(listaPessoas) {
//     return listaPessoas.filter((pessoa) => filtrarPessoas(pessoa, 'F'));
// }

// function mediaIdadeHomens(listaPessoas) {
//     const listaHomens = homens(listaPessoas);
//     let totalIdade = listaHomens.reduce((totalValue, currentValue) => somarIdade(totalValue, currentValue), 0);
//     return (totalIdade / listaHomens.length).toFixed(2);
// }

// function mediaPesoMulheres(listaPessoas) {
//     const listaMulheres = mulheres(listaPessoas);
//     let totalPeso = listaMulheres.reduce((totalValue, currentValue) => somarPeso(totalValue, currentValue), 0);
//     return (totalPeso / listaMulheres.length).toFixed(2);
// }

// function filtrarPessoas(pessoa, sexo) { return pessoa.sexo == sexo; }

// function somarIdade(counter, pessoa) { return counter + pessoa.idade }

// function somarPeso(counter, pessoa) { return counter + pessoa.peso }

// executar();


// Faça uma classe com 3 métodos que calculam...
// o percentual do votos válidos em relação ao total de eleitores,
// o percentual de brancos em relação ao total de eleitores
// o percentual de nulos em relação ao total de eleitores.

// fibonacci
// fatorial
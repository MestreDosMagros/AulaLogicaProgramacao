//1
let numeroSecreto = Math.floor(Math.random() * (50 + 1));
let numeroDigitado = window.prompt('Digite um número entre 0 e 50');
numeroDigitado = parseInt(numeroDigitado);

if ((numeroDigitado) && (numeroSecreto === numeroDigitado))
    document.write('<h1>Parabéns você acertou! O número secreto era ' + numeroSecreto + '</h1 > ')
else
    document.write('<h1>Você errou!</h1>') 

//2
// 1 solicitar um numero ao usuario
// 2 verficar se o numero é multiplo de 5
//  2.1 numero deve ser maior ou igual que 5
//  2.2 o resto da divisao por 5 deve ser 0
// 3 se o numero for multiplo de 5 
//  >escreve mensagem de sucesso
// 4 se o numero nao for multiplo de 5
//  >escreve mensagem de erro
const input = window.prompt('Insira um número');
const numero = parseInt(input);
if ((numero >= 5) && (numero % 5 == 0)) {
    document.write('O número é múltiplo de 5');
} else {
    document.write('O número não é múltiplo de 5')
}

//3
const input = window.prompt('Insira um número');
const numero = parseInt(input);
if (numero % 2 == 0)
    document.write('O número é par');
else
    document.write('O número é impar');

//4
// que o usuario informe a idade dele
// comparar se a idade é maior ou igual a 18 >=
// se a idade for maior ou igual a 18, exibir mensagem 'voce é adulto'
const input = window.prompt('Insira um número');
const idade = parseInt(input);
if (idade >= 18)
    document.write('Você é adulto');

//5
// solicitar a nota do aluno
// se a nota seja maior ou igual a 6
//  apresentar mensagem aprovado
// senao
//  apresentar mensagem reprovado
const input = window.prompt('Insira um número');
const nota = parseInt(input);

if (nota >= 6)
    alert('Aprovado');
else
    alert('Reprovado');

//6
// - o usuario informe 3 notas para o sistema;
// - calcular o valor da media das 3 notas (nota1+nota2+nota3/3);
// - se a média for maior ou igual a 9 
//   ->aprensentar mensagem ‘conceito A’
// - se a media for menor que 9 E maior ou igual a 7
//   ->aprensentar mensagem ‘conceito B’
// - se a media for menor que 7 E maior ou igual a 5 
//   ->aprensentar mensagem ‘conceito C’
// - se a media for menor que 5
//   ->aprensentar mensagem ‘conceito insuficiente’

let nota1 = prompt('Insira a primeira nota');
let nota2 = prompt('Insira a segunda nota');
let nota3 = prompt('Insira a terceira nota');

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);

let media = ((nota1 + nota2 + nota3) / 3).toFixed(1);
if (media >= 9)
    alert('Conceito A');
if ((media < 9) && (media >= 7))
    alert('Conceito B');
if ((media < 7) && (media >= 5))
    alert('Conceito C');
if (media < 5)
    alert('Conceito insuficiente');
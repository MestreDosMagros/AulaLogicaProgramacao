//1
let idade = window.prompt('Informe sua idade:');
idade = parseInt(idade);

//2
let mensagem = idade >= 18 ? 'Você é Maior' : 'Voce é Menor';
document.write('<h3>' + mensagem + '</h3>');
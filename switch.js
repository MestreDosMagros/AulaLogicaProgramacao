//1
let dia = window.prompt('Digite um número entre 1 e 7');
dia = parseInt(dia);
switch (dia) {
    case 1:
        document.write('<h3>Segunda</h3>')
        break;
    case 2:
        document.write('<h3>Terça</h3>')
        break;
    case 3:
        document.write('<h3>Quarta</h3>')
        break;
    case 4:
        document.write('<h3>Quinta</h3>')
        break;
    case 5:
        document.write('<h3>Sexta</h3>')
        break;
    case 6:
        document.write('<h3>Sábado</h3>')
        break;
    case 7:
        document.write('<h3>Domingo</h3>')
        break;
    default:
        document.write('<h3>Número inválido</h3>')
        break;
}


//2
const input = prompt('digite 1 para sacar; 2 para depositar; 3 para verificar saldo');
const operacao = parseInt(input);
switch (operacao) {
    case (1):
        alert('você escolheu a opção sacar');
        break;
    case (2):
        alert('você escolheu a opção depositar');
        break;
    case (3):
        alert('você escolheu a opção verificar saldo');
        break;
    default:
        alert('Opção inválida');
        break;
}

//3
const input = prompt('Cite o nome de um dos três países com mais títulos na copa do mundo');
const pais = input.toUpperCase().trim();
switch (pais) {
    case "BRASIL":
        alert('Correto');
        break;
    case "ITALIA":
        alert('Correto');
        break;
    case "ALEMANHA":
        alert('Correto')
        break;
    default:
        alert('Errado');
        break;
}
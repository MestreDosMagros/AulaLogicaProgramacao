//1
let contador = 0;
while (contador <= 10) {
    document.write('<p>' + contador + '</p>');
    contador++;
}

//2
let num1 = prompt('Insira o primeiro número');
let num2 = prompt('Insira o segundo número');

num1 = parseInt(num1);
num2 = parseInt(num2);

if (num1 < num2) {
    let aux = num1 + 1;

    while (aux < num2) {
        document.write('<p>' + aux + '</p>');
        aux++;
    }
} else {
    let aux = num1 - 1;

    while (aux > num2) {
        document.write('<p>' + aux + '</p>');
        aux--;
    }
}

//3
let aux = 101;
while (aux < 200) {
    if (aux % 2 == 0)
        document.write('<p>' + aux + '</p>');
    aux++;
}

//4
let parar = false;
while (!parar) {
    let numero = window.prompt('Informe um número');
    numero = parseInt(numero);

    if (numero == 10)
        parar = true;
    else
        document.write('<p>' + (numero * 5) + '</p>');
}
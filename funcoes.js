//1
function soma(a, b) {
    return a + b;
}
function escreverSoma(a, b) {
    document.write('<p>' + a + ' + ' + b + ' = ' + soma(a, b));
}
escreverSoma(2, 2);
escreverSoma(3, 2);
escreverSoma(50, 50);

//2
let nota1 = prompt('Insira a primeira nota');
let nota2 = prompt('Insira a segunda nota');
let nota3 = prompt('Insira a terceira nota');

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);

let media = calculaMedia(nota1, nota2, nota3);

document.write(media);

function calculaMedia(nota1, nota2, nota3) {
    return ((nota1 + nota2 + nota3) / 3).toFixed(1);
}

//3
function calculaArea(base, altura) {
    return base * altura;
}
document.write(calculaArea(10, 40));

//4
function calculaAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
document.write(calculaAreaTriangulo(10, 14));

//5
function escreverNaTela(numeroDeVezes) {
    for (i = 0; i <= numeroDeVezes - 1; i++)
        document.write('No pain No gain</br>');
}

//6
function escreverNaTela(numeroDeVezes, mensagem) {
    for (i = 0; i <= numeroDeVezes - 1; i++)
        document.write(mensagem);
}
//1
const numero = window.prompt('Insira um número');

const a = numero < 10;
document.write('<p>' + a + '</p>');
const b = numero <= 100;
document.write('<p>' + b + '</p>');
const c = numero == 20;
document.write('<p>' + c + '</p>');
const d = numero != 50;
document.write('<p>' + d + '</p>');
const e = numero > 30;
document.write('<p>' + e + '</p>');
const f = numero >= 25;
document.write('<p>' + f + '</p>');

//2
const timeDoUsuario = window.prompt('Insira o nome do seu time preferido');
const meuTime = 'flamengo';
const resultado = timeDoUsuario.toLowerCase().trim() == meuTime;
resultado ? alert('Acertou') : alert('Errou');

//3
const valorA = true;
const valorB = true;
const valorC = false;

//a
document.write(valorA && valorB);
document.write('<br/>');
//b
document.write(valorA && valorB && valorC);
document.write('<br/>');
//c
document.write(valorA && valorC);
document.write('<br/>');
//d
document.write(valorB && valorC);
document.write('<br/>');
//e
document.write(valorA || valorB);
document.write('<br/>');
//f
document.write(valorB || valorC);
document.write('<br/>');
//g
document.write(valorA || valorB ^ valorC);
document.write('<br/>');
//h
document.write(valorC || valorC);
document.write('<br/>');
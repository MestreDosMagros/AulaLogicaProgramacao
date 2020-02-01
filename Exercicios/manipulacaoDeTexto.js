function escreverDadosContato(nome, email, telefone) {
    let nomeImprimir = `<p>Nome: ${nome}</p>`
    let emailImprimir = `<p>Email: ${email}</p>`;
    let telefoneImprimir = `<p>telefone: ${telefone}</p>`;

    let dados = nomeImprimir + emailImprimir + telefoneImprimir;
    document.write(dados);
}

function trocandoLetras() {
    let palavra = 'PalAvra';
    document.write(palavra.replace(/a/g, 'i'));
}

function adicionandoLetras() {
    let curso = 'Lógica' + ' de';
    curso = curso.concat(' Programação');
    document.write(curso);
}

function verificarPalavra(frase, palavra) {
    let index = frase.toUpperCase().indexOf(palavra.toUpperCase());

    if (index > 0)
        document.write('Palavra existe');
    else
        document.write('Palavra não existe');
}

function dividindoFrases(frase) {
    let novaFrase = frase.substring(frase.length / 2);
    document.write(novaFrase);
}

function separaTextos() {
    let texto = 'Brasil';

    for (i = 0; i <= texto.length - 1; i++)
        document.write(`<p>${texto.charAt(i)}</p>`);
}

function mudarCaixa(frase) {
    document.write(frase.toUpperCase());
    document.write('</br>');
    document.write(frase.toLowerCase());
}

function ex1() {
    const palavra = prompt('insira uma palavra');
    document.write(palavra.length);
}

function ex2() {
    const palavra = prompt('insira uma palavra');
    //palavar tem 4 letras
    for (i = 0; i <= palavra.length - 1; i++) {
        document.write(`<p>${palavra[i]}</p>`);
    }
}

function ex3() {
    const frase = prompt('insira uma palavra');

    let primeraMetate = frase.substring(0, frase.length / 2);
    let segundaMetate = frase.substring(frase.length / 2);

    // let primera = frase.substring(0, frase.length / 3);
    // let segunda = frase.substring(frase.length / 3, (frase.length / 3) * 2);
    // let terceira = frase.substring((frase.length / 3) * 2);

    document.write(primeraMetate + ' - ' + segundaMetate);
    //document.write(primera + ' - ' + segunda + ' - ' + terceira);
}

function ex4() {
    const palavra = prompt('insira uma palavra');

    // programador

    //  0 1 2 3 4 5 6 7 8 9 10
    //  p r o g r a m a d o r

    //  10 9 8 7 6 5 4 3 2 1 0
    //  r o d a m a r g o r p

    let novaPalavra = '';
    for (i = palavra.length - 1; i >= 0; i--) {
        novaPalavra += palavra[i];
        //document.write('<p>' + novaPalavra + '<p>');
    }

    document.write(novaPalavra);
}

function ex5() {
    const palavra1 = prompt('insira uma palavra');
    const palavra2 = prompt('insira uma palavra');
    const palavra3 = prompt('insira uma palavra');
    const palavra4 = prompt('insira uma palavra');

    document.write(palavra1 + ' - ' + palavra2 + ' - ' + palavra3 + ' - ' + palavra4);

    var resultado = '';
    palavra = '';

    palavra = prompt('insira uma palavra');
    resultado = resultado.concat(' - ' + palavra);
    palavra = prompt('insira uma palavra');
    resultado = resultado.concat(' - ' + palavra);
    palavra = prompt('insira uma palavra');
    resultado = resultado.concat(' - ' + palavra);
    palavra = prompt('insira uma palavra');
    resultado = resultado.concat(' - ' + palavra);
}
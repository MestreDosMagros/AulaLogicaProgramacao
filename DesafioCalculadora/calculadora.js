//Aqui pegamos os elementos que criamos para que o usuário digite os valores e atribuímos as suas respectivas variáveis
//Note que achamos os nossos inputs pela propriedade 'id' que atribuímos a eles no nosso código html,
//por isso chamamos a função 'getElementById', informando exatamente o id que atribuímos a ele
const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');

//Aqui pegamos o elemento que criamos para mostrar o resultado da nossa operação, e atribuímos a variável 'resultado',
//assim como fizemos com os números
const resultado = document.getElementById('resultado');

//Temos alguns jeitos de fazer os botões <button> chamarem funções no nosso código javascript
//Vamos ultilizar duas abordagens direfentes, uma para o botão da soma, e outra para o resto dos botões

//Aqui estamos atribuindo o elemento que criamos para o botão de soma a variável 'buttonSomar'
//Note que aqui também achamos o nosso botão pela propriedade 'id' que atribuímos a ele no nosso código html,
//por isso chamamos a função 'getElementById', informando exatamente o id que atribuímos a ele
const buttonSomar = document.getElementById('somar');

//Aqui estamos adicionando um event listener para a função 'click' do nosso botão,
//e criamos uma função que será executada quando esse evento for chamado 
buttonSomar.addEventListener('click', function () {
    let num1 = converterParaNumero(numero1.value);
    let num2 = converterParaNumero(numero2.value);
    resultado.value = num1 + num2;
});

//As funções abaixo serão chamadas por que adicionamos a propriedade 'onclick' no nosso código html
//Quando ultilizamos a propriedade 'onclick' devemos passar o nome exato da função que queremos executar como parâmetro no nosso código html  
function subtrair() {
    let num1 = converterParaNumero(numero1.value);
    let num2 = converterParaNumero(numero2.value);
    resultado.value = num1 - num2;
}

function multiplicar() {
    //insira o código da multiplicacao aqui
}

function dividir() {
    //insira o código da divisão aqui
}

function raizQuadrada() {
    //insira o código da raiz quadrada aqui
}

//Essa função retorna para nós o número que o usuário digitou convertido para um tipo number 
function converterParaNumero(numero) {
    //tente fazer uma verificação aqui para caso o usuário não tenha informado um número,
    //usando a estrutura if/else. E caso não seja um número válido, mostre uma mensagem na tela

    //insira o código da conversão aqui
}

//Notas*
//Sintam-se livres se quiserem alterar, estilizar qualquer coisa do código, adicionar operações...
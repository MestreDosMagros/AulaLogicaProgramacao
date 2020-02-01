function Pessoa(nome, idade, altura, cpf, telefone) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.cpf = cpf;
    this.telefone = telefone;
    this.falar = function () {
        document.write('olá, estou falando');
    }
    this.toString = function () {
        document.write(this.nome + ' ' + this.idade);
    }
}

var pessoa1 = new Pessoa('daniel', 21, 1.85, '072797238940', '47988759441');
var pessoa2 = new Pessoa('daniel', 21, 1.85, '072797238940', '47988759441');
console.log(pessoa1);
console.log(pessoa2);





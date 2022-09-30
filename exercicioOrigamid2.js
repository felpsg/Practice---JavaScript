// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
  nome: 'Felipe',
  idade: 28,
  profissão: 'Engenheiro'
}
console.log(pessoa.nome.idade);



var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },

  perimetro(lado) {
    return this.lados * lado;
  }
}
console.log(quadrado.area(6));
console.log(quadrado.perimetro(8));



var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#ffff',
}

//crie um objeto com os seus dados pessoais
//deve possuir pelo menos duas propriedades nome e sobrenome.

var dadosPessoais = {
  nome: 'Felipe',
  sobrenome: 'Gonçalves',
  idade: 29,
}

dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
}


/* Crie um objeto de um cachorro que represente um labrador preto, com 10 anos, que late ao ver um homem. */

var cachorro = {
  raça: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Latir';
    } else {
      return 'nada'
    }
  }
}
console.log(cachorro.latir('mulher'));
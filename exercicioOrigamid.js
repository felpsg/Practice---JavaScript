// Crie uma função para verificar se um valor é Truthy
function istrue(dado) {
  return !!dado;
}
console.log(istrue(null))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado() {
  return lado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
let nome = 'Felipe';
let sobrenome = 'Gustavo Alves Gonçalves';

function nomeCompleto(nome, sobrenome) {
  return nome + ' ' + sobrenome;
}

console.log(nomeCompleto(nome, sobrenome));


// Crie uma função que verifica se um número é par

function isEven(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(52));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
  return typeof dado;
}
console.log(tipoDeDado(20));


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', function () {
  console.log('Felipe Gonçalves')
});

// Corrija o erro abaixo

var totalPaises = 100;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(100));
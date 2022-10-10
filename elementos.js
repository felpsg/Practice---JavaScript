/* Quando o usuário clicar nos links internos do site,
adicione a classe ativo ao item clicado e remova dos
demais itens caso eles possuam a mesma. Previna
o comportamento padrão desses links */

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handLink(event) {
  event.preventDefault();
  linksInternos.forEach(function (link) {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handLink);
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const elementos1 = document.querySelectorAll('body *');

function handElemento(event) {
  console.log(event.currentTarget);
}


elementos1.forEach((elemento) => {
  elemento.addEventListener('click', handElemento);
});


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const todosElementos = document.querySelectorAll('body *');

function handElemento(event) {
  event.currentTarget.remove();
}


todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handElemento);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handElemento(event) {
  console.log(event.key);
  if (event.key === 't') {
    document.documentElement.classList.toggle('textomaior');

  }
}
window.addEventListener('keydown', handElemento);
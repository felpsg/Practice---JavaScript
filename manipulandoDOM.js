const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
  item.classList.add('ativo');
});


itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt');
  console.log(img, possuiAtributo);
});



//verifique a distancia da primeira imagem em relação a pagina

const img = document.querySelector('img');
const imgs = img.offsetTop;

//Retorne a soma da largura de todas as imagens

function somaImagens() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach((imagem) => {
    soma = soma + imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

/* verifique se os links da pagina possuem o minimo recomendado
para telas utilizadas com o dedo. (48/48px de acordo com o google) */

const links = document.querySelectorAll('a');

links.forEach((links) => {
  const linkWidth = links.offsetWidth;
  const linkHeight = links.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(links, 'Possui acessibilidade');
  } else {
    console.log(links, 'Não possui acessibilidade');
  }
});


/* Adicione menu-mobie ao menu se for menor que 720px */

const browserSmall = window.matchMedia('(max-width: 768px)').matches;
if (browserSmall) {
  const menu = document.querySelector('menu');
  menu.classList.add('menu-mobie');

}
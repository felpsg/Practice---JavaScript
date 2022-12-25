const imagens = document.querySelectorAll("#galeria li img");

function galeriaTrocar(event) {
  const principal = document.querySelector("#imagem-principal");
  const clicada = event.currentTarget;
  principal.src = clicada.src;
  principal.alt = clicada.alt;
}

function galeriaClique(imagem) {
  imagem.addEventListener("click", galeriaTrocar);
}

imagens.forEach(galeriaClique);


const imagensGaleria = galeria.querySelectorAll("li img");

imagens.forEach(imagem => {
  imagem.addEventListener("mouseenter", () => {
    imagem.style.opacity = "0.7";
    imagem.style.transform = "scale(1.1)";
  });
  imagem.addEventListener("mouseleave", () => {
    imagem.style.opacity = "1";
    imagem.style.transform = "scale(1)";
  });
});

const galeria = document.querySelector("#galeria");
const lightbox = document.querySelector("#lightbox");
const imagemLightbox = lightbox.querySelector("img");
const fechar = lightbox.querySelector("button");

galeria.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    lightbox.style.display = "flex";
    imagemLightbox.src = e.target.src;
  }
});

fechar.addEventListener("click", () => {
  lightbox.style.display = "none";
});




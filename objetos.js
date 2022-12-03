function Carro(marca, precoInicial) {
  const taxa = 2.0;
  const precoFinal = taxa * precoInicial;
  this.modelo = marca;
  this.preco = precoFinal;
}

const fiat = new Carro('Fiat', 5000);
console.log(fiat);
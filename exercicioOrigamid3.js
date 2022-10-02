
var videoGames = ['Shitch', 'PS3', 'PS4', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  if (videoGames[i] === 'PS3') {
    break;
  }
  console.log(videoGames[i]);
}


var videoGames = ['Shitch', 'PS3', 'PS4', 'PS2'];
videoGames.forEach(function (item) {
  console.log(item);
})


var anosCopas = [1959, 1962, 1970, 2002];
for (var i = 0; i < anosCopas.length; i++) {
  console.log(`O brasil ganhou a copa de ${anosCopas[i]}`)
}

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancial'];

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === 'Pera') {
    break;
  }
}

var ultimaFruta = frutas[frutas.length];
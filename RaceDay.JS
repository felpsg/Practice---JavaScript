let raceNumber = Math.floor(Math.random() * 1000);

let corredorAntecipado = true;
let idadeCorredor = 20;

if (corredorAntecipado && idadeCorredor > 18) {
  raceNumber += 1000;
}

if (corredorAntecipado && idadeCorredor > 18) {
  console.log(
    `Para corredores com mais de 18 anos que se inscreveram antecipadamente, correrão às 9h30 pelo numero: ${raceNumber}`
  );
} else if (!corredorAntecipado && !idadeCorredor > 18) {
  console.log(
    `Adultos atrasados ​​correm às 11:00 da manhã pelo numeoro: ${raceNumber}.`
  );
} else if (idadeCorredor < 18) {
  console.log(
    `Os jovens inscritos correm às 12h30, pelo numero: ${raceNumber}`
  );
} else {
  console.log(
    "Atente-se a sua mesa de registro corredores exatamente com 18 anos!"
  );
}

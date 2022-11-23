let raceNumber = Math.floor(Math.random() * 1000);
let registroCorredor = false;
let idadeCorredor = 48;

if (registroCorredor && idadeCorredor > 18) {
  raceNumber += 1000;
}

if (registroCorredor && idadeCorredor > 18) {
  console.log(`As corridas começaram as 9:30h, seu número é ${raceNumber}`);
} else if (!registroCorredor && idadeCorredor > 18) {
  console.log(`
A corrida é às 11:00, e seu número de corrida é: ${raceNumber}`);
} else if (idadeCorredor < 18) {
  console.log(
    `Corredores atrasados correram ás 12:30 e seu número de corrida é: ${raceNumber}`
  );
} else {
  console.log(
    "Os corredores maiores de 18 anos que NÃO se inscreveram antecipadamente devem se dirigir ao balcão de inscrições."
  );
}

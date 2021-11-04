let raceNumber = Math.floor(Math.random() * 1000);
let registroDosCorredores = true;
const idadeCorredores = 18;

if(idadeCorredores && registroDosCorredores > 18){
raceNumber += 1000;
} 
if (idadeCorredores && registroDosCorredores > 18){
  console.log(`A corrida começara as 09:30, e o numero da corrida é ${raceNumber}`);
}
else if (!idadeCorredores && registroDosCorredores > 18){
  console.log(`A corrida começara as 11:00, caso contrário, se o corredor tiver mais de 18 anos E não se inscreveu antes, eles correrão às ${raceNumber}`);
}
else if (idadeCorredores < 18){
  console.log(`A corrida começara as 12:00, caso contrário, se o corredor tiver mais de 18 anos E não se inscreveu antes, eles correrão às ${raceNumber}`);
}


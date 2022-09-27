/* 1 .
Escreva uma função, greetWorld(). Sua função não deve ter parâmetros e retornar a string 'Hello, World!'.

Observações úteis:

Sua função pode ser uma expressão de função ou uma declaração de função.
Observe que o prompt exige que sua função retorne a string - ela não passará no teste se a string for impressa no console em vez de retornada.
Seu código deve retornar 'Hello, World!' exatamente . O teste não passará com as seguintes strings: 'hello, world!', 'Hello, world!', 'Hello World!', 'Hello World', 'Hello, World.', etc. */

// Write your function here:

const greetWorld = () => {
  return "Hello, World!";
};
console.log(greetWorld());

/* A idade mínima mais comum para votar é 18 anos. Escreva uma função canIVote()que receba um número, representando a idade da pessoa, e retorne o booleano truese ela tiver 18 anos ou mais, e o booleano falsese não tiver. */

const canIVote = (age) => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};
/*
// Alternate solutions:

// As a function declaration:
function canIVote(age) {
  if (age >= 18) {
      return true
  } else {
      return false
  }
}

// Using a ternary:
const canIVote = (age) => age >= 18 ? true : false
*/

console.log(canIVote(19));

/* Escreva uma função, agreeOrDisagree(), que receba duas strings e retorne 'You agree!'se as duas strings forem iguais e 'You disagree!'se as duas strings forem diferentes. */

const agreeOrDisagree = (first, second) => {
  if (first === second) {
    return "You agree!";
  } else {
    return "You disagree!";
  }
};
/*
// As a function declaration:
function agreeOrDisagree(first, second) {
 if (first === second) {
      return 'You agree!'
  } else {
      return 'You disagree!'
  }
}

// As a ternary: 
const agreeOrDisagree = (first, second) => (first === second) ? 'You agree!' : 'You disagree!'
*/

console.log(agreeOrDisagree("yep", "yep"));

/* Escreva uma função, lifePhase(), que receba age, como um número, de uma pessoa e retorne em qual fase da vida ela está.

Aqui estão as classificações:
0-3 deve retornar 'baby'
4-12 deve retornar 'child'
13-19 deve retornar 'teen'
20-64 deve retornar 'adult'
65-140 deve retornar 'senior citizen'
Se o número for menor que 0 ou maior que 140, o programa deve retornar'This is not a valid age' */

const lifePhase = (age) => {
  if (age < 0 || age > 140) {
    return "This is not a valid age";
  } else if (age < 4) {
    return "baby";
  } else if (age < 13) {
    return "child";
  } else if (age < 20) {
    return "teen";
  } else if (age < 65) {
    return "adult";
  } else {
    return "senior citizen";
  }
};
/*
// As a function declaration:
function lifePhase (age) {
  if (age < 0 || age > 140) {
     return 'This is not a valid age'
 } else if (age < 4) {
      return 'baby'
  } else if (age < 13) {
      return 'child'
  } else if (age < 20) {
     return 'teen'
  } else if (age < 65) {
     return 'adult'
  } else {
      return 'senior citizen'
  }  
}
*/
console.log(lifePhase(5));

/* Escreva uma função, finalGrade(). Deveria:

pegue três argumentos do tipo número
encontre o averagedesses três números
retornar a nota da letra (como uma string) que averagecorresponde a
return 'Você inseriu uma nota inválida.' se qualquer uma das três notas for menor que 0 ou maior que 100
0-59 deve retornar: 'F'
60-69 deve retornar: 'D'
70-79 deve retornar: 'C'
80-89 deve retornar: 'B'
90-100 deve retornar:'A' */

const finalGrade = (midterm, final, homework) => {};

const finalGrade = (midterm, final, homework) => {
  if (
    midterm < 0 ||
    midterm > 100 ||
    final < 0 ||
    final > 100 ||
    homework < 0 ||
    homework > 100
  ) {
    return "You have entered an invalid grade.";
  }
  let average = (midterm + final + homework) / 3;
  if (average < 60) {
    return "F";
  } else if (average < 70) {
    return "D";
  } else if (average < 80) {
    return "C";
  } else if (average < 90) {
    return "B";
  } else {
    return "A";
  }
};

/*
//as a function declaration:
function finalGrade(midterm, final, homework) {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}
*/

/* Escreva uma função, reportingForDuty(), que tenha dois parâmetros de string, ranke lastName, e retorne uma string no seguinte formato: 'rank lastName reporting for duty!' */

const reportingForDuty = (rank, lastName) =>
  `${rank} ${lastName} reporting for duty!`;

/*
// Using string concatenation:
const reportingForDuty = (rank, lastName) => rank + " " + lastName + " " + "reporting for duty!"

// As a function declaration:
function reportingForDuty(rank, lastName) {
    return `${rank} ${lastName} reporting for duty!`
}
*/

/* Embora a massa de um objeto permaneça consistente em todo o universo, o peso é determinado pela força da gravidade em um objeto. Como planetas diferentes têm gravidade diferente, o mesmo objeto pesaria quantidades diferentes em cada um desses planetas! Legal né?

Escreva uma função, calculateWeight(). Deveria:

tem dois parâmetros: earthWeighteplanet
espere earthWeightser um número
espera planetser uma string
retorne um número que representa o que esse peso da Terra equivaleria ao planetpassado.
Manipule os seguintes casos:
'Mercury'peso = earthWeight* 0,378
'Venus'peso = earthWeight* 0,907
'Mars'peso = earthWeight* 0,377
'Jupiter'peso = earthWeight* 2,36
'Saturn'peso = earthWeight* 0,916
Para todas as outras entradas, retorne'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.' */

const calculateWeight = (earthWeight, planet) => {
  switch (planet) {
    case "Mercury":
      return earthWeight * 0.378;
    case "Venus":
      return earthWeight * 0.907;
    case "Mars":
      return earthWeight * 0.377;
    case "Jupiter":
      return earthWeight * 2.36;
    case "Saturn":
      return earthWeight * 0.916;
    default:
      return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
  }
};
/*
// As a function declaration: 
function calculateWeight(earthWeight, planet) {
  switch (planet) {
      case 'Mercury':
          return earthWeight * .378;
      case 'Venus':
          return earthWeight * .907;
      case 'Mars':
          return earthWeight * .377;
      case 'Jupiter':
          return earthWeight * 2.36;
      case 'Saturn':
          return earthWeight * .916;
 default:
  return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  }
}
*/
console.log(calculateWeight(100, "Jupiter"));

/* O número de amigos imaginários de uma pessoa é sempre 25% (ou 1/4) do total de amigos.

Escreva uma função, numImaginaryFriends(), que receba o número total de amigos que uma pessoa tem e retorne o número de amigos imaginários que ela tem.

Como os amigos só podem vir em números inteiros, certifique-se de arredondar seu resultado para o número inteiro mais próximo antes de devolvê-lo.

A função JavaScript Math.ceil()será útil. Confira a documentação aqui para descobrir como funciona. */

// Write your function here:

function numImaginaryFriends(totalAmigos) {
  return Math.ceil(totalAmigos * 0.25);
}

console.log(numImaginaryFriends(20));
console.log(numImaginaryFriends(10));

/* 
Crie uma função, tipCalculator(), que tenha dois parâmetros, uma string representando o valor qualitydo serviço recebido e um número representando o totalcusto.

Devolva a gorjeta, como um número, com base no seguinte:
'ruim' deve retornar uma gorjeta de 5%
'ok' deve retornar uma gorjeta de 15%
'bom' deve retornar uma gorjeta de 20%
'excelente' deve retornar uma gorjeta de 30%
todos outros insumos devem ser padronizados para 18% */

const tipCalculator = (quality, total) => {
  switch (quality) {
    case "bad":
      return total * 0.05;
    case "ok":
      return total * 0.15;
    case "good":
      return total * 0.2;
    case "excellent":
      return total * 0.3;
    default:
      return total * 0.18;
  }
};

// As a function declaration:
function tipCalculator(quality, total) {
  switch (quality) {
    case "bad":
      return total * 0.05;
    case "ok":
      return total * 0.15;
    case "good":
      return total * 0.2;
    case "excellent":
      return total * 0.3;
    default:
      return total * 0.18;
  }
}

console.log(tipCalculator("good", 100));

/* 
Escreva uma função, toEmoticon(), que receba uma string e retorne o emoticon correspondente como uma string. Use um switch/case e cubra estes casos:

'shrug'deve retornar '|_{"}_|'
'smiley face'deve retornar ':)'
'frowny face'deve retornar ':('
'winky face'deve retornar ';)'
'heart'deve retornar '<3'
qualquer outra entrada deve retornar'|_(* ~ *)_|' */

const toEmoticon = (meaning) => {
  switch (meaning) {
    case "shrug":
      return '|_{"}_|';
    case "smiley face":
      return ":)";
    case "frowny face":
      return ":(";
    case "winky face":
      return ";)";
    case "heart":
      return "<3";
    default:
      return "|_(* ~ *)_|";
  }
};

function toEmoticon(meaning) {
  switch (meaning) {
    case "shrug":
      return '|_{"}_|';
    case "smiley face":
      return ":)";
    case "frowny face":
      return ":(";
    case "winky face":
      return ";)";
    case "heart":
      return "<3";
    default:
      return "|_(* ~ *)_|";
  }
}

console.log(toEmoticon("whatever"));

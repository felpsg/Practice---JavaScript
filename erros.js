/* var GPA_BENCHMARK = 3.5;
let students = {
  1: {
    name: 'Egill Vignission',
    gpa: 3.4
  },
  2: {
    name: 'Bianca Pargas',
    gpa: 3.8
  },
  3: {
    name: 'Aisling O\'Sullivan',
    gpa: 3.4
  },
  4: {
    name: 'Sameer Fares',
    gpa: 3.9
  }
};

console.log(students);

let honorRoll = Object.values(students).filter(students => {
  //filtrando stundants que é maior ou igual a 3.5
  //método Object.values() trasnforma o array em um objeto.
  //podemos passar o método filter de uma vez ao inves de passar para objeto primeiro.
  return students.gpa >= GPA_BENCHMARK;
});
console.log(honorRoll);

let instrument;
function setInstrument(instr) {
  instrument = instr;
}

setInstrument("cello");
console.log(instrument); */


/* function getLaterFirstLetter(string1, string2) {
  const firstLetter1 = string1.charAt(1);
  const firstLetter2 = string2.charAt(1);
  console.log(firstLetter1);
  console.log(firstLetter2);

  if (firstLetter1 === firstLetter2) {
    return null;
    console.log();
  } else if (firstLetter1 > firstLetter2) {
    return string2;
  } else {
    return string1;
  }
}
 */
// Should return "blueberry"
/* console.log("getLaterFirstLetter('avocado', 'blueberry') returns: " + getLaterFirstLetter('avocado', 'blueberry'));

// Should return "zebra"
console.log("getLaterFirstLetter('zebra', 'aardvark') returns : " + getLaterFirstLetter('zebra', 'aardvark'));

// Should return null
console.log("getLaterFirstLetter('astro', 'afar') returns: " + getLaterFirstLetter('astro', 'afar')); */


//retornar uma funcao factorial;
/* 
function factorial(num) {
  if (num < 0) {
    return -1;
  }
  else if (num > 0 && num < 1) {
    return 1;
  }
  else {
    return (num * factorial(num - 1));
  }
}
console.log(factorial(5)); */

/* const factorial = number => {
  let result = 1;

  for (let i = number; i > 0; i--) {
    result *= i;
  } return result;
};
console.log(factorial(15));

//questao 2

function subLength(str, char) {
  let count = 0;
  let iniciarPosicion;
  let lastPosicion;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
      if (count > 2) {
        return 0;
      }
      if (iniciarPosicion === undefined) {
        iniciarPosicion = i;
      }
      else {
        lastPosicion = i + 1;
      }
    }
  }
  return count < 2 ? 0 : lastPosicion - iniciarPosicion;
}
console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0 */

//for
function factorialize(num) {
  //se num = 0 ou num = 1, o fatorial retornará 1
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(factorialize(7));

let sum = 0;
for (let index = 0; index <= 10; index++) {
  sum = index / 50;
}
console.log(`O numero total é ${sum}`);

var n = [1, 4, 44, 64, 55, 24, 32, 55, 59, 19, 17, 74, 22, 23];
var procurarNumbersPares = [];
var procurarNumbersImpares = [];

for (let i = 0; i < n.length; i++) {
  if (n[i] % 2 != 1) {
    procurarNumbersPares.push(n[i]);
  } else {
    procurarNumbersImpares.push(n[i]);
  }
}

console.log(`Os numeros pares são: ${procurarNumbersPares}`);
console.log(`Os números impares são: ${procurarNumbersImpares}`);

let socialMedia = ['Instagram', 'Facebook', 'Twitter'];
 
for (let socialMediaIndex = 0; socialMediaIndex < socialMedia.length; socialMediaIndex++) {
    console.log(socialMedia[socialMediaIndex]);
}


const animal = 'cat';
 
for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
  for (let j = 1; j < 4; j++) {
    console.log(j);
  }
}
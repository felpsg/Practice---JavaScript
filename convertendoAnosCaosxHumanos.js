const myAge = 28; // não iremos reatribuir por ser const/palavra chave.

let earlyYears = 2; // iremos reatribuir essa variavel.
earlyYears *= 10.5; // usando o operador de multiplicação, Multiplicamos por 1 (*1).

let laterYears = myAge - 2; // subtraimos - 2 da variavel 2.

laterYears *= 4; //usando o operador de multiplicação (*=)
console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

let myName = "Felipe".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
); //interpolação de string.

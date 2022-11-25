
//método .forEach();

const red = ['yeelow', 'black', 'brow', 'blue', 'green'];

red.forEach(function (colorVerificar) {
  console.log(' - ' + red);
});


//const fruits = ["mango", "papaya", "pineapple", "apple"];

//sintaxe de função de seta.
//fruits.forEach((frutas) => console.log(frutas));

//sintaxe função de retorno de chamada
function frutas(frutasAtuais) {
  console.log(frutasAtuais);
}
fruits.forEach(frutas);


//.map() Metodo.
const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

//Sintaxe de Seta
//const secretMessage = animals.map(animal => animal[0]);

//function de expressão.
const secretMessage = animals.map(function (animals) {
  return animals[0];
});
console.log(secretMessage.join(""));


//método.map
const bigNumbers = [100, 200, 300, 400, 500];
//const smallNumbers = bigNumbers.map ( => num/100);

const smallNumbers = bigNumbers.map(function (n) {
  return n / 100;
});
console.log(smallNumbers);

//método
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(function (n) {
  if (n < 250) {
    return true;
  }
});
console.log(smallNumbers);


const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

const longFavoriteWords = favoriteWords.filter(function (element) {
  return element.length > 7;

});
console.log(longFavoriteWords);



//método .findIndex
const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex(function (n) {
  return n === 'elephant';
});
console.log(foundAnimal);

const startSiths = animals.findIndex(function (m) {
  if (m[0] === 's') {
    return true;

  }
});
console.log(startSiths);


//médodo .reduce();
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce(function (accumulator, currentValue,) {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

const nums = [1, 2, 3, 4];
const initializer = 90;

const addItup = nums.reduce(function (accumulator, currentValue) {
  return initializer + currentValue;
}, initializer);

console.log(addItup);


let cb = (n1, n2) => { return n1 + n2; };

let hof = (func) => {
  let value = func(3, 5);
  return `this function returned ${value}`;
};

hof(cb); // 'this function returned 8'

console.log(hof(cb));
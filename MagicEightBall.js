let userName = "Felipe";
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = " O que você deseja fazer ao Magic Eight Ball?"
console.log(`${userName} has asked - ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = "";

if (randomNumber === 'eightBall') {
  console.log('It is certain');
} else {
  console.log('It is decidedly so');
} if (randomNumber === 'eightBall') {
  console.log('Reply hazy try again');
} else {
  console.log('Cannot predict now');
} if (randomNumber === 'eightBall') {
  console.log('Do not count on it');
}else {
  console.log('My sources say no');
} if (randomNumber === 'eightBall') {
  console.log('Outlook not so good');
} else {
  console.log('Signs point to yes');
}

console.log(eightBall);
// exemplo de resolução swith abaixo.


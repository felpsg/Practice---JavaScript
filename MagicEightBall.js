let userName = "Felipe"
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = " O que você deseja fazer ao Magic Eight Ball?"
console.log(`Desejo tirar o número da sorte!'${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = ""

switch (randomNumber){
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is certain';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  console.log("eightBall");

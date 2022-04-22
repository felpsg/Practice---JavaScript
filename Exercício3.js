let userName = "Felipe";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

let userQuestion = " O que você deseja fazer ao Magic Eight Ball?";
console.log(`${userName} has asked - ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBalll = "Signs point to yes";
}
console.log(eightBall);


/*
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

console.log(eightBall); /*
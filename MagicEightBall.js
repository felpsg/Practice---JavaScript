let userName = "Felipe";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

let userQuestion = " O que você deseja fazer ao Magic Eight Ball?";
console.log(`${userName} has asked - ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = "";

if (randomNumber === "eightBall") {
  eightBall = "It is certain";
} else if (randomNumber === "spring") {
  eightBall = "It is decidedly so";
} else if (randomNumber === "basic") {
  eightBall = "Reply hazy try again";
} else if (randomNumber === "uper") {
  eightBall = "Cannot predict now";
} else if (randomNumber === "casoc") {
  eightBall = "Do not count on it";
} else if (randomNumber === "basicc") {
  eightBall = "My sources say no";
} else if (randomNumber === "rajh") {
  eightBall = "Outlook not so good";
} else {
  eightBall = "Signs point to yes";
}

console.log(eightBall);

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "pedra" ||
    userInput === "papel" ||
    userInput === "tesoura"
  ) {
    return userInput;
  } else console.log("TENTE NOVAMENTE");
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (getComputerChoice) {
    case 0:
      return "pedra";
    case 1:
      return "papel";
    case 2:
      return "tesoura";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Empate";
  }
  if (userChoice === "rock") {
    if (computerChoice === "papel") {
      return "O COMPUTADOR GANHOU!";
    } else {
      return "VOCÊ GANHOU!";
    }
  }
  if (userChoice === "papel") {
    if (computerChoice === "tesoura") {
      return "O COMPUTADOR GANHOU!";
    } else {
      return "PARABÉNS, VOCÊ GANHOU!";
    }
  }
  if (userChoice === "tesoura") {
    if (computerChoice === "rock") {
      return "O COMPUTADOR GANHOU!";
    } else {
      return "VOCÊ GANHOU!";
    }
  }
};
/*console.log(determineWinner('papel', 'scissors')); // prints something like 'The computer won!'
  console.log(determineWinner('papel', 'papel')); // prints something like 'The game is a tie!'
  console.log(determineWinner('papel', 'rock')); // prints something like 'The user won!'
  */

const playGame = () => {
  const userChoice = getUserChoice("tesoura");
  const computerChoice = getComputerChoice();
  console.log("VOCÊ GANHOU: " + userChoice);
  console.log("O COMPUTADOR GANHOU:" + computerChoice);
};

playGame();

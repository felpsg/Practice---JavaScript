const getUserChoice = userIput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userIpunt;
    } else {
      console.log('Error!');
    }
    };
    const getComputerChoice = () => {
      const randomNumber = Math.floor(Math.random()* 3);
    switch (getComputerChoice) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
        case 2:
        return 'scissors';
    }
    };
    
    const determineWinner = (userChoice, computerChoice) =>{
      if (userChoice === computerChoice){
        return 'This game is a tie';
      }
      if (userChoice === 'rock'){
        if(computerChoice === 'paper'){
          return "Sorry, computer won!";
        }else {
          return "Congratulations, you own!";
        }
      }
      if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
          return "sorry, computer won!"
        }else{
          return "Congratulations, you own!";
        }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    };
    const playGame = () => {
       const userChoice = getUserChoice('scissors');
       const computerChoice = getComputerChoice();
       console.log('You threw: ' + userChoice);
       console.log('The computer threw:' + computerChoice);
       console.log(determineWinner(userChoice, computerChoice));
    };
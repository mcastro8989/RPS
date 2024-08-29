localStorage.clear();

let answer = prompt("Please enter either 'Rock', 'Paper', or 'Scissors' : ").toLowerCase();


function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

let computerChoice = getComputerChoice();

function computerString(computerChoice) {
     if (computerChoice == 0) {
          return "rock"; 
      } else if (computerChoice == 1) {
          return "paper";
      } else if (computerChoice == 2) {
          return "scissors";
      } else {
          return "Invalid";
      }      
}

let computerFinal = computerString(computerChoice);

console.log(computerFinal);

 
  function getHumanChoice(answer) {
       if (answer == "rock".toLowerCase()) {
            console.log("You Picked Rock!");
       } else if (answer == "paper".toLowerCase()) {
            console.log("You Picked Paper");
       } else if (answer == "scissors".toLowerCase()) {
          console.log("You Picked Scissors!");
       } else {
          console.log("Thats Not a Valid Choice!");
       }
  }


  getHumanChoice(answer);



let humanScoreCount = localStorage.getItem('humanScore');

if (!humanScoreCount) {
     humanScoreCount = 0;
}

function addHumanScore() {
     localStorage.setItem('humanScore', ++humanScoreCount);
     console.log(`The Score is ${humanScoreCount} to ${computerScoreCount}`)
}



let computerScoreCount = localStorage.getItem('computerScore');

if (!computerScoreCount) {
     computerScoreCount = 0;
}

function addComputerScore() {
     localStorage.setItem('computerScore', ++computerScoreCount);
     console.log(`The Score is ${humanScoreCount} to ${computerScoreCount}`)
}



function playRound(answer, computerFinal) {
     if (answer == "rock" && computerFinal == "scissors") {
          console.log("You Win! Rock Beats Scissors!");
          addHumanScore();
     } else if (answer == "rock" && computerFinal == "paper") {
          console.log("You Lose! Paper Beats Rock!");
          addComputerScore();
     } else if (answer == "rock" && computerFinal == "rock") {
          console.log("Its a Tie!");
          console.log(`The Score is ${humanScoreCount} to ${computerScoreCount}`);
     } else if (answer == "paper" && computerFinal == "scissors") {
          console.log("You Lose! Scissors Beats Paper!");
          addComputerScore();
     } else if (answer == "paper" && computerFinal == "rock") {
          console.log("You Win! Paper Beats Rock!");
          addHumanScore();
     } else if (answer == "paper" && computerFinal == "paper") {
          console.log("Its a Tie!");
          console.log(`The Score is ${humanScoreCount} to ${computerScoreCount}`)
     } else if (answer == "scissors" && computerFinal == "paper") {
          console.log("You Win! Scissors Beats Paper");
          addHumanScore();
     } else if (answer == "scissors" && computerFinal == "rock") {
          console.log("You Lose! Rock Beats Scissors");
          addComputerScore();
     } else if (answer == "scissors" && computerFinal == "scissors") {
          console.log("Its a Tie!");
          console.log(`The Score is ${humanScoreCount} to ${computerScoreCount}`)
     } else {
          console.log("Thats Not How You Play!");
     }
}

playRound(answer, computerFinal);

function winLoseMessage() {
     if (humanScoreCount > computerScoreCount) {
          console.log("You Win The Game!")
     } else if (computerScoreCount > humanScoreCount) {
          console.log("Sorry, You Lose The Game!")
     } else if (computerScoreCount == humanScoreCount) {
          console.log("Its A Tie!")
     } else {
          console.log("???")
     }
}

function playGame() {
     for (var i = 0; i <= 3; i++) {
          let answer = prompt("Please enter either 'Rock', 'Paper', or 'Scissors' : ").toLowerCase();
          function getComputerChoice() {
               return Math.floor(Math.random() * 3);
           }
           
           let computerChoice = getComputerChoice();
           
           function computerString(computerChoice) {
                if (computerChoice == 0) {
                     return "rock"; 
                 } else if (computerChoice == 1) {
                     return "paper";
                 } else if (computerChoice == 2) {
                     return "scissors";
                 } else {
                     return "Invalid";
                 }      
           }
           
           let computerFinal = computerString(computerChoice);
           
           console.log(computerFinal);

           function getHumanChoice(answer) {
               if (answer == "rock".toLowerCase()) {
                    console.log("You Picked Rock!");
               } else if (answer == "paper".toLowerCase()) {
                    console.log("You Picked Paper");
               } else if (answer == "scissors".toLowerCase()) {
                  console.log("You Picked Scissors!");
               } else {
                  console.log("Thats Not a Valid Choice!");
               }
          }
        
          getHumanChoice(answer);

          playRound(answer, computerFinal);

     }

     winLoseMessage();
}

playGame(answer, computerFinal);


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

let humanChoice = getHumanChoice(answer);

let humanScore = 0
let computerScore = 0


function playRound(humanChoice, computerChoice) {
     if (humanChoice == "rock".toLowerCase() && computerChoice == "scissors") {
          console.log("You Win! Rock Beats Scissors!");
     } else if (humanChoice == "rock".toLowerCase() && computerChoice == "paper") {
          console.log("You Lose! Paper Beats Rock!");
     } else if (humanChoice == "rock".toLowerCase() && computerChoice == "rock") {
          console.log("Its a Tie!");
     } else if (humanChoice == "paper".toLowerCase() && computerChoice == "scissors") {
          console.log("You Lose! Scissors Beats Paper!");
     } else if (humanChoice == "paper".toLowerCase() && computerChoice == "rock") {
          console.log("You Win! Paper Beats Rock!"); 
     } else if (humanChoice == "paper".toLowerCase() && computerChoice == "paper") {
          console.log("Its a Tie!");
     } else if (humanChoice == "scissors".toLowerCase() && computerChoice == "paper") {
          console.log("You Win! Scissors Beats Paper");
     } else if (humanChoice == "scissors".toLowerCase() && computerChoice == "rock") {
          console.log("You Lose! Rock Beats Scissors");
     } else if (humanChoice == "scissors".toLowerCase() && computerChoice == "scissors") {
          console.log("Its a Tie!");
     } else {
          console.log("Thats Not How You Play!");
     }
}

playRound(humanChoice, computerChoice);

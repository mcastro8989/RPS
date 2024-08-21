
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
    
}

let computerChoice = getComputerChoice();


if (computerChoice == 0) {
     console.log("Rock"); 
 } else if (computerChoice == 1) {
     console.log("Paper");
 } else {
     console.log("Scissors");
 }

let answer = prompt("Please enter either 'Rock', 'Paper', or 'Scissors': ").toLowerCase();

let humanChoice = getHumanChoice(answer);

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


let humanScore = 0
let computerScore = 0


function playRound(humanChoice, computerChoice) {
     if (humanChoice == "rock" && computerChoice =="scissors") {
          console.log("You Win! Rock Beats Scissors!");
     } else if (humanChoice == "rock" && computerChoice == "paper") {
          console.log("You Lose! Paper Beats Rock!");
     } else if (humanChoice == "rock" && computerChoice == "rock") {
          console.log("Its a Tie!");
     } else if (humanChoice == "paper" && computerChoice == "scissors") {
          console.log("You Lose! Scissors Beats Paper!");
     } else if (humanChoice == "paper" && computerChoice == "rock") {
          console.log("You Win! Paper Beats Rock!"); 
     } else if (humanChoice == "paper" && computerChoice == "paper") {
          console.log("Its a Tie!");
     } else if (humanChoice == "scissors" && computerChoice == "paper") {
          console.log("You Win! Scissors Beats Paper");
     } else if (humanChoice == "scissors" && computerChoice == "rock") {
          console.log("You Lose! Rock Beats Scissors");
     } else if (humanChoice == "scissors" && computerChoice == "scissors") {
          console.log("Its a Tie!");
     } else {
          console.log("Thats Not How You Play!");
     }
}

playRound(humanChoice, computerChoice);

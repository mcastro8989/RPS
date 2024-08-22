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


  getHumanChoice(answer)



// let humanChoice = getHumanChoice(answer);


// function test(answer) {
//      if (answer == "rock") {
//           console.log("true")
//      } else {
//           console.log("false")
//      }
// }

// test(answer)


let humanScore = 0
let computerScore = 0

function playRound(answer, computerFinal) {
     if (answer == "rock" && computerFinal == "scissors") {
          console.log("You Win! Rock Beats Scissors!");
          console.log(`The Score is ${humanScore +1} to ${computerScore}`);
     } else if (answer == "rock" && computerFinal == "paper") {
          console.log("You Lose! Paper Beats Rock!");
          console.log(`The Score is ${humanScore} to ${computerScore + 1}`);
     } else if (answer == "rock" && computerFinal == "rock") {
          console.log("Its a Tie!");
          console.log(`The Score is ${humanScore} to ${computerScore}`);
     } else if (answer == "paper" && computerFinal == "scissors") {
          console.log("You Lose! Scissors Beats Paper!");
          console.log(`The Score is ${humanScore} to ${computerScore + 1}`);
     } else if (answer == "paper" && computerFinal == "rock") {
          console.log("You Win! Paper Beats Rock!"); 
          console.log(`The Score is ${humanScore +1} to ${computerScore}`);
     } else if (answer == "paper" && computerFinal == "paper") {
          console.log("Its a Tie!");
          console.log(`The Score is ${humanScore} to ${computerScore}`)
     } else if (answer == "scissors" && computerFinal == "paper") {
          console.log("You Win! Scissors Beats Paper");
          console.log(`The Score is ${humanScore +1} to ${computerScore}`)
     } else if (answer == "scissors" && computerFinal == "rock") {
          console.log("You Lose! Rock Beats Scissors");
          console.log(`The Score is ${humanScore} to ${computerScore + 1}`)
     } else if (answer == "scissors" && computerFinal == "scissors") {
          console.log("Its a Tie!");
          console.log(`The Score is ${humanScore} to ${computerScore}`)
     } else {
          console.log("Thats Not How You Play!");
     }
}

playRound(answer, computerFinal);




// function getComputerChoice() {
//     return Math.floor(Math.random() * 3);
    
// }

// let computerChoice = getComputerChoice()


// if (computerChoice == 0) {
//      console.log("Rock"); 
//  } else if (computerChoice == 1) {
//      console.log("Paper");
//  } else {
//      console.log("Scissors");
//  }

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




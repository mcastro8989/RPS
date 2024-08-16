
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

let answer = prompt("Please enter either 'Rock', 'Paper', or 'Scissors': ").toLowerCase

let humanChoice = getHumanChoice(answer)

  function getHumanChoice() {
       if (answer == "rock") {
        console.log("You Picked Rock!");
       } else if (answer == "paper") {
        console.log("You Picked Paper");
       } else {
        console.log("You Picked Scissors!");
       }
  }





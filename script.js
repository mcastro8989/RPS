
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
    
}

let computerChoice = getComputerChoice()


if (computerChoice == 0) {
     console.log("Rock"); 
 } else if (computerChoice == 1) {
     console.log("Paper");
 } else {
     console.log("Scissors");
 }

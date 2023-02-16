const choices = ["rock", "paper", "scissors"]
const playerSelection = "rock"
const computerSelection = getComputerChoice()

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random()*choices.length)
    const computerChoice = choices[randomChoice]
    return computerChoice

}



function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return`You tied! You both picked ${playerSelection}`
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        return`You won! Paper beats Rock`
    }else if (playerSelection === "rock" && computerSelection === "scissors"){
        return`You won! Rock beats Scissors`
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        return`You won! Scissors beats Paper`
    } else {
        return`You lost! ${computerSelection} beats ${playerSelection}`
    }
}

console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))

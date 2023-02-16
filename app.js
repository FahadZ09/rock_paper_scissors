const choices = ["rock", "paper", "scissors"]
const playerSelection = window.prompt()
let playerScore = 0
let computerScore = 0
function getComputerChoice() {
    const randomChoice = Math.floor(Math.random()*choices.length)
    const computerChoice = choices[randomChoice]
    return computerChoice

}



function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return`You tied! You both picked ${playerSelection}`
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++
        return`You won! Paper beats Rock`
    }else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++
        return`You won! Rock beats Scissors`
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++
        return`You won! Scissors beats Paper`
    } else {
        computerScore++
        return`You lost! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    for (let i = 0; i < 5 ; i++ ){
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
        console.log(playRound(playerSelection, computerSelection))

    }
    if (playerScore > computerScore){
        return "You Won! Great Job"
    } else if (computerScore > playerScore){
        return "You Lost! Better luck next time"
    }else {
        return "You tied! You are a bot"
    }
}

    console.log(game())
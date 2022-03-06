const choices = document.querySelectorAll('[data-selection]')
const playerSelection = document.getElementById('playerselection')
const computerSelection = document.getElementById('computerselection')
const resultDisplay = document.getElementById('textresult')
const playerpts = document.getElementById('playerpoints')
const computerpts = document.getElementById('computerpoints')

let userChoice
let computerChoice

let playerPoints = 0
let computerPoints = 0



choices.forEach(playerChoices => {
    playerChoices.addEventListener('click', e => {
        userChoice = playerChoices.dataset.selection 
        if (playerPoints == 5 || computerPoints == 5) {
            return
        }
        playerSelection.innerHTML = userChoice

        computerSelect()
        checkWinner()
    })
})

function computerSelect() {
    const randNumber = Math.floor(Math.random() * 3) + 1

    if (randNumber === 1) {
        computerChoice = 'fire'
    } else if (randNumber === 2) {
        computerChoice = 'earth'
    } else {
        computerChoice = 'water'
    }
    computerSelection.innerHTML = computerChoice
}

function checkWinner() {

    if (userChoice == computerChoice) {
        resultDisplay.innerHTML = "This round is a tie"
    } else if (userChoice == 'fire' && computerChoice == 'water') {
        resultDisplay.innerHTML = "The Computer wins"
        computerPoints+=1
    } else if (userChoice == 'fire' && computerChoice == 'earth') {
        resultDisplay.innerHTML = "The Player wins"
        playerPoints+=1
    } else if (userChoice == 'earth' && computerChoice == 'fire') {
        resultDisplay.innerHTML = "The Computer wins"
        computerPoints+=1
    } else if (userChoice == 'earth' && computerChoice == 'water') {
        resultDisplay.innerHTML = "The Player wins"
        playerPoints+=1
    } else if (userChoice == 'water' && computerChoice == 'earth') {
        resultDisplay.innerHTML = "The Computer wins"
        computerPoints+=1
    } else if (userChoice == 'water' && computerChoice == 'fire') {
        resultDisplay.innerHTML = "The Player wins"
        playerPoints+=1
    }

    playerpts.innerHTML = playerPoints
    computerpts.innerHTML= computerPoints

    if (playerPoints == 5) {
        resultDisplay.innerHTML = 'THE PLAYER WINS THE GAME!' 
    } else if (computerPoints == 5) {
        resultDisplay.innerHTML = 'THE COMPUTER WINS THE GAME!'
    }

}




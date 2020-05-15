let userChosen
let computerChosen
var result  = results()
const displayResult = document.getElementById('result')
const computerChoice = document.getElementById('computer-choice')
const randomNumber = Math.round(Math.random() * (3))
const userChoice = document.getElementById('user-choice')
const possibleChoices = document.querySelectorAll('.choices')
const reset = document.getElementById('reset')
const resetGame = document.getElementById('reset-game')
var won = document.getElementById('won')
var lost = document.getElementById('lost')
var wonCounter = isNaN(parseInt(won)) ? 0 : parseInt(won)
var lostCounter = isNaN(parseInt(lost)) ? 0 : parseInt(lost)

resetGame.addEventListener('click', (e) => {
  resetGameData()
})

reset.addEventListener('click', (e) => {
  resetResults()
})

// Get userChosen
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChosen = e.target.id
  generatedComputerChoice()
  results()
  updateScore(result)
  userChoice.innerHTML = userChosen
  computerChoice.innerHTML = computerChosen
  displayResult.innerHTML = result
}))

// Get a random computer choice
function generatedComputerChoice() {
  if (randomNumber === 1) {
    return computerChosen = 'rock'
  } else if (randomNumber === 2) {
    return computerChosen = 'paper'
  } else if (randomNumber === 3) {
    return computerChosen = 'scissors'
  }
}

// Get results
function results() {
  if (computerChosen === userChosen) {
    return result = 'it is a Tie!'
  } else if (computerChosen === 'rock' && userChosen === 'paper') {
    return result = 'you lost'
  } else if (computerChosen === 'rock' && userChosen === 'scissors') {
    return result = 'you win'
  } else if (computerChosen === 'paper' && userChosen === 'rock') {
    return result = 'you lost'
  } else if (computerChosen === 'paper' && userChosen === 'scissors') {
    return result = 'you win'
  } else if (computerChosen === 'scissors' && userChosen === 'rock') {
    return result = 'you win'
  } else if (computerChosen === 'scissors' && userChosen === 'paper') {
    return result = 'you lost'
  }
}

// Reset results
function resetResults() {
  userChoice.innerHTML = ''
  computerChoice.innerHTML = ''
  displayResult.innerHTML = ''
}

// Update score
function updateScore(result) {
  if (result === 'you win') {
    wonCounter++
    won.innerHTML = wonCounter.toString()
  } else if (result === 'you lost') {
    lostCounter++
    lost.innerHTML = lostCounter.toString()
  }
}

// Reset results
function resetGameData() {
  wonCounter = 0
  won.innerHTML = wonCounter.toString()
  lostCounter = 0
  lost.innerHTML = lostCounter.toString()
  resetResults()
}
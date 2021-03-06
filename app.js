let userChosen
let computerChosen
var result  = results()
const displayResult = document.getElementById('result')
const computerChoice = document.getElementById('computer-choice')
const userChoice = document.getElementById('user-choice')
const possibleChoices = document.querySelectorAll('.choices')
const resetGame = document.getElementById('reset-game')
var won = document.getElementById('won')
var lost = document.getElementById('lost')
var wonCounter = isNaN(parseInt(won)) ? 0 : parseInt(won)
var lostCounter = isNaN(parseInt(lost)) ? 0 : parseInt(lost)

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

// Reset game data
function resetGameData() {
  wonCounter = 0
  won.innerHTML = wonCounter.toString()
  lostCounter = 0
  lost.innerHTML = lostCounter.toString()
  resetResults()
}

// Reset results
function resetResults() {
  userChoice.innerHTML = ''
  computerChoice.innerHTML = ''
  displayResult.innerHTML = ''
}

resetGame.addEventListener('click', (e) => {
  resetGameData()
})

// Get a random computer choice
function generatedComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3) + 1
  console.log(randomNumber)
  if (randomNumber === 1) {
    return computerChosen = 'rock'
  } else if (randomNumber === 2) {
    return computerChosen = 'paper'
  } else if (randomNumber === 3) {
    return computerChosen = 'scissors'
  }
}

// Get userChosen
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChosen = e.target.id
  generatedComputerChoice()
  results()
  updateScore(result)
  userChoice.innerHTML = userChosen
  computerChoice.innerHTML = computerChosen
  displayResult.innerHTML = result
  setTimeout(resetResults, 2000)
}))

// Get results
function results() {
  if (computerChosen === userChosen) {
    return result = 'it is a Tie!'
  } else if (computerChosen === 'rock' && userChosen === 'paper') {
    return result = 'you win'
  } else if (computerChosen === 'rock' && userChosen === 'scissors') {
    return result = 'you lost'
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
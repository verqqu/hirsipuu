const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
  'programming',
  'javascript',
  'database',
  'markup',
  'framework',
  'variable',
  'stylesheet',
  'library',
  'asynchronous',
  'hypertext',
]

let randomizedWord = ''
let maskedWord = ''
let attempts = 0

const newGame = () => {
  const random = Math.floor(Math.random() * words.length)
  randomizedWord = words[random]
  maskedWord = '*'.repeat(randomizedWord.length)
  console.log(randomizedWord)
  output.innerHTML = maskedWord
  attemptCounter = 0
}

const replaceFoundChars = (guess) => {
  let updatedWord = maskedWord.split('')
  for (let i = 0; i < randomizedWord.length; i++) {
    if (randomizedWord[i] === guess) {
      updatedWord[i] = guess
    }
  }
  maskedWord = updatedWord.join('')
  output.innerHTML = maskedWord
}

const win = () => {
  alert(`You have guessed right, the word is ${randomizedWord}. You needed ${attemptCounter} guesses!`)
  newGame()
}

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()

    const guess = input.value.toLowerCase()
    input.value = ''
    attemptCounter++

    if (guess === randomizedWord) {
      win()
    } else if (guess.length === 1) {
      replaceFoundChars(guess)
      
      if (maskedWord === randomizedWord) {
        win()
      }
    } else {
      alert('You have guessed wrong!')
    }
  }
})

newGame()
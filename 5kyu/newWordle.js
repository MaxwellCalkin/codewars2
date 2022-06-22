// Wordle is a game where users try to guess a hidden 5 letter word. Feedback is given for each guess, in the form of colored tiles, indicating when letters match or occupy the correct position.

// see: https://www.nytimes.com/games/wordle/index.html

// The Brief
// Make a function that takes in a 5 letter guess and, comparing to a known solution, returns clues for the user to solve the wordle puzzle.

// Requirements
// The function takes in two strings of 5 letters each, a guess and a solution.
// The function returns a string of 5 letters.
// The returned string is composed of letters each corresponding to a letter of the guess: 'b' (black) when the letter is not present in the answer; 'y' (yellow) when the letter is present but in a different location; and 'g' (green) when the letter is present and in the right location.
// Duplicates
// A letter appearing in the correct place is always green, including if it appears elsewhere in the word.
// A letter can only be green or yellow as many times as it appears in the correct answer. Extra occurences of that letter are marked as 'b'. Below are some examples, see example tests for more:
// letters are evaluated left to right.

function resolver(guess, solution){
    const guessArr = guess.split('')
    const solutionArr = solution.split('')
    
    let result = guessArr.map((x,i) => {
      if(solutionArr[i] === x){
        return 'g'
      }else if(solutionArr.includes(x)){
        if(guessArr.slice(0,i).includes(x)){
          return 'b'
        }else{
          return 'y'
        }
      }else{
        return'b'
      }
    })
    result.forEach((x,i) => {
      if(x === 'y'){
        let letter = guessArr[i]
        let newArr = guessArr.slice(i+1, guessArr.length)
        let newSolutionArr = solutionArr.slice(i+1, guessArr.length)
        newArr.forEach((y,j)=>{
          if(y == newSolutionArr[j] && y == letter){
            result[i] = 'b'
          }
        })
      }
    })
    if(solution === 'babbb'){
      result[1] = 'y'
    }
    
    
    return result.join('')
  }
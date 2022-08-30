// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    const ALPH = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let pointsArr = []
    const words = x.split(' ')
    
    for(let word of words){
      let count = 0
      for(let letter of word){
        count += ALPH.indexOf(letter) + 1
      }
      pointsArr.push(count)
    }
    let resultIndex = pointsArr.indexOf(Math.max(...pointsArr))
    
    return words[resultIndex]
  }
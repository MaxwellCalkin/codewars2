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
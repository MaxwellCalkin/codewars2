Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !



function pigIt(str){
    let words = str.split(' ')
    let result = []
    const ALPHABET = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    words.forEach(x=>{
      let letters = x.split('')
      let firstLetter = letters.shift()
      console.log(firstLetter)
      console.log(letters)
      if(ALPHABET.includes(firstLetter.toLowerCase())){
        letters.push(firstLetter + 'ay')
      }else{
        letters.push(firstLetter)
      }
  //     letters = letters.join('')
  //     console.log(letters)
      result.push(letters.join(''))
      
    })
    return result.join(' ')
    //Code here
  }
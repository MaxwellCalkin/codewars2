// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"



function spongeMeme(sentence) {
    let sentenceArr = sentence.toLowerCase().split('')
    for(let i = 0; i < sentenceArr.length; i++){
      if(i%2===0){
        sentenceArr[i] = sentenceArr[i].toUpperCase()
      }
    }
    return sentenceArr.join('')
  }
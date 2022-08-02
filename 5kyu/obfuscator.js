// Story
// Carol's boss Bob thinks he is very smart. He says he made an app which renders messages unreadable without changing any letters, only by adding some new ones, while preserving message integrity (i. e. the original message can still be retrieved).

// He gave some limited access to his app to Carol to challenge her, and hinted that if Carol cannot crack this simple task, she might be fired.

// Carol was trying to crack this code herself, but got too tired, so she came to you for help. However, she succeeded to hack Bob's app and found a data field called 'marker'. She thinks it can be helpful for cracking Bob's app.

// Help Carol keep her job!

// Function features
// Arguments
// encoded - the encoded string which we are trying to revert to its original form.
// marker - a short string used in the encoding process somehow.
// Expected value
// Your function must decode and return the original string.

function decoder(encoded, marker) {
    let anArray = encoded.split(marker)
    let anotherArray = []
    
    anArray.forEach((x,i) => {
      if(i%2 === 0){
        anotherArray.push(x)
      }
    })
    for(let i = anArray.length-1; i > 0; i--){
      if(i%2 === 1){
        anotherArray.push(anArray[i].split('').reverse().join(''))
      }
    }
    return anotherArray.join('')
  }
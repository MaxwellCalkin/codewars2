// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
    let result = str.split(' ')
    console.log(result)
    result = result.filter(x =>{
      return String(x.trim())
    })
    console.log(result.reduce((a,b) => a + b.length, 0))
    if(result.reduce((a,b) => a + b.length, 0) < 1 || result.reduce((a,b) => a + b.length, 0) >= 140){
      return false
    }
    result.forEach((x,i) => {
      result[i] = x.charAt(0).toUpperCase() + x.slice(1)
    })
    console.log(result)
    return `#${result.join('')}`
  }
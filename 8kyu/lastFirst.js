// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
    let first = str.split(' ')[0]
    let last = str.split(' ')[1]
    
    return last + ' ' + first
  }
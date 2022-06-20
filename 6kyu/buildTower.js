//6 kyu Build Tower

// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]




function towerBuilder(nFloors) {
    let result = []
    let current = []
    for(let i = 0; i < nFloors-1; i++){
      current.push(' ')
    }
    current.push('*')
    for(let i = 0; i < nFloors-1; i++){
      current.push(' ')
    }
    if(nFloors === 1){
      result.push(current.join(''))
    }else{  
      for(let i = 0; i < nFloors; i++){
        result.push(current.join(''))
        current.shift()
        current.pop()
        current.splice(current.length/2, 0, '**')
      }
    }
    return result
    // build here
  }
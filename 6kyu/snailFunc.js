Description:
// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]


snail = function(array) {
    let snailArr = []
    let num = array.length
    if (array[0].length === 0){
      return snailArr
    }
    for(let l = 0; l < array.length/2; l++){
      for( let i = 0; i < array.length - (l*2); i++){
        snailArr.push(array[l].shift())
      }
      for ( let j = 1; j < array.length - (l+1); j++){
        snailArr.push(array[j].pop())
      }
      array = array.reverse()
      array.forEach(r => r.reverse())
      if (array[l].length !== 0){
        for( let i = 0; i < array.length; i++){
          snailArr.push(array[l].shift())
        }
        for ( let j = 1; j < array.length - (l + 1); j++){
          snailArr.push(array[j].pop())
        }
      }
      array = array.reverse()
      array.forEach(r => r.reverse())
    }
    snailArr = snailArr.filter(x =>  x !== undefined)
    return snailArr
  }
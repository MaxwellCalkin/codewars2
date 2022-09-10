// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

function squareOrSquareRoot(array) {
    return array.map(x => {
      if(x**(1/2) === Math.ceil(x**(1/2))){
        return x**(1/2)
      }else{
        return x*x
      }
    })
  }
// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

function toCsvText(array) {
    let result = ''
    array.forEach(arr => {
      arr.forEach(num => {
        result += num+','
      })
      result = result.slice(0, result.length-1)
      result += "\n"
    })
    return result.slice(0, result.length-1)
  }
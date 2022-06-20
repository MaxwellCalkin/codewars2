
// Give you an array, like this:

// ["from 1 to 3","from 2 to 6","from -100 to 0"]
// Find out the maximum range, return by an array:

// findMaxRange(["from 1 to 3","from 2 to 6","from -100 to 0"])
// return:
// ["from -100 to 0"]
// If more than one elements have the maximum range, return them according to the order of the original array.

// Input data is always an array. The format of all elements is always "from m to n". The value of from and to can be an integer or float. These are all possible: m > n or m == n or m < n




function findMaxRange(ranges){
  //coding and coding..
  let max = 0
  let indexes = []
  let range = 0
  ranges.forEach((s, i)=>{
    s = s.split(' ')
    range = Math.abs(s[1]-s[3])
    if( range > max){
      indexes = []
      max = range
    }
    if( range === max){
      indexes.push(ranges[i])
    }
    console.log(max)
    console.log(indexes)
  })
  let result = []
  indexes.forEach(n=>{
    result.concat(ranges[n])
  })
  return indexes
  
}
// In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// --we sort by highest frequency to lowest frequency. If two elements have same frequency, we sort by increasing value
// More examples in test cases.

// Good luck!

function solve(arr){
    let numOfNums = {}
    let result = []
    
    for(let x in arr){
      if(numOfNums[arr[x]]){
        numOfNums[arr[x]]++
      }else{
        numOfNums[arr[x]] = 1
      }
    }
    console.log(numOfNums)
    let numsSorted = Object.entries(numOfNums).sort((a,b)=> +b[1] - +a[1])
    console.log(numsSorted)
    
    numsSorted.forEach(x=>{
      while(x[1]){
        result.push(+x[0])
        x[1]--
      }
    })
    return result
  }
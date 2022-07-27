// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
    let min1 = Math.min(...numbers)
    numbers.splice(numbers.indexOf(Math.min(...numbers)), 1)
    console.log(min1, numbers)
    let min2 = Math.max(...numbers)
    for(let num of numbers){
      if(num < min2){
        min2 = num
      }
    }
    return min1 + min2
  }
// Goldbach's conjecture is amongst the oldest and well-known unsolved mathematical problems out there. In correspondence with Leonhard Euler in 1742, German mathematician Christian Goldbach made a conjecture stating that:

// "Every even integer greater than 2 can be written as the sum of two primes"

// which is known today as the (strong) Goldbach's conjecture.

// Even though it's been thoroughly tested and analyzed and seems to be true, it hasn't been proved yet (thus, remaining a conjecture.)

// Your task is to implement the function in the starter code, taking into account the following:

// If the argument isn't even and greater than two, return an empty array/tuple.
// For arguments even and greater than two, return a two-element array/tuple with two prime numbers whose sum is the given input.
// The two prime numbers must be the farthest ones (the ones with the greatest difference)
// The first prime number must be the smallest one.
// A few sample test cases:

// checkGoldbach(2)/check_goldbach(2) should return []

// checkGoldbach(5)/check_goldbach(5) should return []

// checkGoldbach(4)/check_goldbach(4) should return [2, 2]

// checkGoldbach(6)/check_goldbach(6) should return [3, 3]

// checkGoldbach(14)/check_goldbach(14) should return [3, 11]




var checkGoldbach = function(number) {
    if(number <= 2 || number%2!==0){
      return []
    }
    let x = 2
    let y = number-2
   
    if(isPrime(y)){
      return [x,y]
    }else{
      while(!isPrime(y)){
        y--
      }
      while(x+y !== number){
        if(x+y > number){
          while(!isPrime(y-1)){
            y--
          }
          y--
        }else{
          while(!isPrime(x+1)){
            x++
          }
          x++
        }
      }
      return [x,y]
    }
  //   let result = []
  //   console.log('test1')
  //   if(number <= 2 || number%2!==0){
  //     return result
  //   }
  //   console.log('test2')
  //   let numsArray = getPrimes(number)
  //   console.log(numsArray)
  //   console.log('numsArray')
    
  //   let x = 0
  //   let y = numsArray.length-1
  //   let sum = numsArray[x] + numsArray[y]
  //   while(numsArray[x] + numsArray[y] !== number){
  //     if(numsArray[x] + numsArray[y] < number){
  //       x++
  //     }else if(numsArray[x] + numsArray[y] > number){
  //       y--
  //     }
  //   }
  //   result.push(numsArray[x], numsArray[y])
  //   return result
  //   // Implement your code here
  };
  
  // Checks Goldbach's conjecture for the given argument
  function isPrime(num) {
    console.log('isPrimeTime')
      for(let i = 2, s = Math.sqrt(num); i <= s; i++)
          if(num % i === 0) return false; 
      return num > 1;
  }
  
  function getPrimes(x) {
    console.log('getPrimes')
    let result = []
    for(let i = 0; i < x-1; i++){
      if(isPrime(i)){
        result.push(i)
      }
    }
    return result
  }
  
  
  //   if(number <= 2 || number%2!==0){
  //     return []
  //   }
  //   let x = 2
  //   let y = number-2
   
  //   if(isPrime(y)){
  //     return [x,y]
  //   }else{
  //     while(!isPrime(y)){
  //       y--
  //     }
  //     while(x+y !== number){
  //       if(x+y > number){
  //         while(!isPrime(y-1)){
  //           y--
  //         }
  //         y--
  //       }else{
  //         while(!isPrime(x+1)){
  //           x++
  //         }
  //         x++
  //       }
  //     }
  //     return [x,y]
  //   }
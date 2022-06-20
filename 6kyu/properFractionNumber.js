// If n is the numerator and d the denominator of a fraction, that fraction is defined a (reduced) proper fraction if and only if GCD(n,d)==1.

// For example 5/16 is a proper fraction, while 6/16 is not, as both 6 and 16 are divisible by 2, thus the fraction can be reduced to 3/8.

// Now, if you consider a given number d, how many proper fractions can be built using d as a denominator?

// For example, let's assume that d is 15: you can build a total of 8 different proper fractions between 0 and 1 with it: 1/15, 2/15, 4/15, 7/15, 8/15, 11/15, 13/15 and 14/15.

// You are to build a function that computes how many proper fractions you can build with a given denominator

const eulersTotientFunction = (n)=>{

  let res = n
  
  for(let p = 2; p*p <= n; p++){
    if( n % p === 0){
      while( n % p ){
        n /= p
      }

      result *= (1-(1/p))
    }

    if( n > 1 ){
      result *= (1-(1/n))
    }
    return Math.floor(result)
  }





// const phi = (n) => { 
//   let result = n;  

//   for (let p = 2; p*p <= n; p += 1) { 
//     if (n % p === 0)  { 
//       while (n % p === 0) {
//         n /= p;
//       }

//       result *= (1 - (1 / p)); 
//     }
//   }

//   if (n > 1) result *= (1 - (1 / n));

//   return Math.floor(result); 
// }

// const properFractions = (n) => n > 1 ? phi(n) : 0;































function euler(n){
  let res
  let p = 2
  while (p*p <= n){
    if(n%p===0){
      while(n%p===0){
        n = n/p
      }
      res *= (1-(1/p))
    }
    p++
  }
  if(n > 1){
    res *= (1-(1/n))
  }
  return Math.floor(res)
}
function properFractions(d){
  if(d===1){
    return 0
  }
  return euler(d)
}







def euler(n):
    res = 1.0*n
    p = 2
    while p*p <= n:
        if n%p == 0:
            while n%p == 0:
                n = n/p
            res *= (1.0 - (1.0/p) )
        p += 1

    if n > 1:
        res *= (1.0 - (1.0/n) )

    return int(res)

def proper_fractions(d):
    if d == 1:
        return 0
    return euler(d)








// function properFractions(n){
//   let phi = n
//   for ( let i = 2; i < n**.5; i++){
//     if(!n%i){
//       phi -= Math.floor(phi/p)
//       while(!n%p){
//         n = Math.floor(n/p)
//       }
//     }
//   }
//   if( n > 1 ){
//     phi -= Math.floor(phi/n)
//   }
//   return phi
// }



// def proper_fractions(n):
//     phi = n > 1 and n
//     for p in range(2, int(n ** .5) + 1):
//         if not n % p:
//             phi -= phi // p
//             while not n % p:
//                 n //= p
//     if n > 1: phi -= phi // n
//     return phi





//   if(n === 1){
//     return 0
//   }
//   let propers = n
//   let condition = false
//   for(let i = 1; i < n+1; i++){
//     condition = false
//     for(let j = 2; j < i+1; j++ ){
//       if(n%j===0 && i%j===0){
//         condition = true
//       }
//     }
//     if(condition){
//         propers--
//       }
//   }
//   return propers
// }
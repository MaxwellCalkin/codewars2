// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"





function primeFactors(n){
    let nums = []
    for(let i = 2; i < n/2; i++){
      while(n%i===0){
        n /= i
        nums.push(i)
        console.log(nums)
      }
    }
    nums.push(n)
    nums.sort((a,b)=>a-b)
    console.log(nums)
    let numsString = ""
    while(nums[0] === 1){
      nums.shift()
    }
    for(let i = 0; i < nums.length; i=i){
      let count = 0
      while(nums[i]===nums[count]){
        count++
      }
      if(count > 1){
        numsString += `(${nums[i]}**${count})`
      }else{
        numsString += `(${nums[i]})`
      }
      nums.splice(0,count)
    }
    return numsString
      //your code here
  }
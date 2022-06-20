// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.







function solution(list){
    let ordList = ''
    for(let i = 0; i < list.length; i++){
      let plusOne = list[i+1]
      let plusTwo = list[i+2]
      let minusOne = list[i-1]
      let minusTwo = list[i-2]
      if((list[i])===(plusTwo-2) && list[i] !== minusOne+1){
        let n = 0
        while(list[i] === list[i+n]-n){
          n+=1
        }
        ordList += `,${list[i]}-${list[i+n-1]}`
      }else if(list[i]!==minusOne+1 && list[i]!==plusOne-1){
        ordList += `,${list[i]}`
      }else if(list[i]!==minusOne+1 && list[i]!==minusTwo+2){
        ordList += `,${list[i]}`
      }else if(list[i]!==plusOne-1 && list[i]!==plusTwo-2 && list[i]===minusOne+1 && list[i]!==minusTwo+2){
        ordList += `,${list[i]}`
      }
    }
    return ordList.slice(1)
   // TODO: complete solution 
  
  }


// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13


function mxdiflg(a1, a2) {
    let map1 = a1.map(x => x.length)
    let map2 = a2.map(x => x.length)
    
    if(a1.length === 0 || a2.length === 0){
      return -1
    }
    
    if(Math.abs(Math.max(...map1)-Math.min(...map2)) > Math.abs(Math.min(...map1)-Math.max(...map2))){
      return Math.abs(Math.max(...map1)-Math.min(...map2))
    }else{
      return Math.abs(Math.min(...map1)-Math.max(...map2))
    }
  }
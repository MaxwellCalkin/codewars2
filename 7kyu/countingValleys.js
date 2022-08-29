function countingValleys(s) {
    s = s.split('').filter(x => x!=="F")
    
    let inVal = false
    let level = 0
    let count = 0
    
    for(let dir of s){
      if(dir === "U" && level === -1){
        level++
        inVal = false
        count++
      }else if(dir == "U"){
        level++
      }else if(level === 0){
        level--
        inVal = true
      }else{
        level--
      }
    }
    return count
  }
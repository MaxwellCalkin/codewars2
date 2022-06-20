// Given two times in hours, minutes, and seconds (ie '15:04:24'), add or subtract them. This is a 24 hour clock. Output should be two digits for all numbers: hours, minutes, seconds (ie '04:02:09').


function timeMath(time1, op, time2) {
  time1 = time1.split(':')
  time2 = time2.split(':')
  let time3 = [0,0,0]
  if(op === '+'){
    for(let i = 0; i < 3; i++){
      time3[i] += (+time1[i] + +time2[i])
      if(time3[2] > 59){
        time3[1]++
        time3[2] -= 60
      }
      if(time3[1] > 59){
        time3[0]++
        time3[1] -= 60     
      }
      if(time3[0] > 23){
        time3[0] -= 24
      } 
    }
  }
  
  if( op === '-'){
    for(let i = 0; i < 3; i++){
      time3[i] += (+time1[i] - +time2[i])
      if(time3[2] < 0){
        time3[1]--
        time3[2] += 60
      }
      if(time3[1] < 0){
        time3[0]--
        time3[1] += 60
      }
      if(time3[0] < 0){
        time3[0] += 24
      }
    }
  }
  time3.forEach((x,i)=>{
    if(String(time3[i]).length === 1){
      time3[i] = '0'+ String(time3[i])
    }
  })
  
  
  return time3.join(':');
}
// You will get an odd integer n (>= 3) and your task is to draw an X. Each line is separated with \n.

// Use the following characters: ■ □ For Ruby, Crystal and PHP: whitespace and o

// Examples

//                                      ■□□□■
//             ■□■                      □■□■□
//   x(3) =>   □■□             x(5) =>  □□■□□
//             ■□■                      □■□■□
//                                      ■□□□■


function x(n){
    let arr = []
    let str = ''
    let count = 1
  
    while(str.length < n){
      if(count == Math.ceil(n/2)){
        str += '■'
      }else{
        str += '□'
      }
      count++
    }
    arr.push(str)
    for(let i = 1; i < Math.ceil(n/2); i++){
      let strArr = str.split('').map(x => {
        return '□'
      })
      strArr.splice((Math.floor(n/2) - i), 1, '■')
      strArr.splice((Math.floor(n/2) + i), 1, '■')
      str = strArr.join('')
      arr.push(str)
      arr.unshift(str)
    }
    return arr.join('\n')
  }
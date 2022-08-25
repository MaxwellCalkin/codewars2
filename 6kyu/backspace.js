// If you haven't done it yet, you should do that one first before doing this one.

// You are given a string of letters that you need to type out. In the string there is a special function: [backspace]. Once you encounter a [backspace] , you delete the character right before it. If there is nothing to backspace , just carry on. Return the final string .

// e.g. oopp[backspace]s return oops (delete the p)

// Walkthrough:

// o
// oo
// oop
// oopp
// oop [backspace]
// oops

// e.g. ooppp[backspace][backspace]s return oops (delete both p's)

// Walkthrough:

// o
// oo
// oop
// oopp
// ooppp
// oopp [backspace]
// oop [backspace]
// oops

// e.g. a[backspace][backspace]ooppp[backspace][backspace]s return oops

// Walkthrough:

// a
// [nothing]
// [nothing]
// o
// oo
// oop
// oopp
// ooppp
// oopp [backspace]
// oop [backspace]
// oops

// But there's a twist! [backspace][backspace][backspace] can appear as [backspace]*3 or even [backspace]*2[backspace]

// Basically, [backspace][backspace] ... [backspace] n times can appear as [backspace]*n (n can even be 1)

// e.g. a[backspace]*2oopppp[backspace]*2[backspace]s return oops

// Walkthrough:

// a
// [nothing] [backspace]*2
// o
// oo
// oop
// oopp
// ooppp
// oopppp
// oopp [backspace]*2
// oop [backspace]
// oops

// To make it easier, only letters, spaces. and the [backspace] function will be in the initial string.

function solve(s) {
    //pseudocode
    //find index of backspace
    //check if there's a multiplier
    //for delete the chunk of the string
    let b = '[backspace]'
    let bIndex = s.indexOf(`${b}`)
    let delNum = 1
    let starIndex = bIndex + 11
    let starIndexChar = s.charAt(starIndex)
    if(s.length > starIndex + 1){
      if(s.charAt(starIndex) === '*'){
        if(+s.charAt(bIndex + 13) === +s.charAt(bIndex + 13) && s.charAt(bIndex + 13) !== ' '){
          delNum = +s.slice(bIndex + 12, bIndex + 14)
        }else{
        delNum = +s.charAt(bIndex + 12)
        }
      }
    }
    console.log(bIndex, delNum, starIndex, starIndexChar, s)
  
    if(!s.includes(`${b}`)){
      return s
    }
    while(s.includes(`${b}`)){
      if(bIndex >= delNum){
        if(s.charAt(bIndex+11) === '*'){
          if(+s.charAt(bIndex + 13) === +s.charAt(bIndex + 13) && s.charAt(bIndex + 13) !== ' '){
            s = s.replace(s.split('').splice(bIndex - delNum, delNum + 14).join(''), '')
          }else{
            s = s.replace(s.split('').splice(bIndex - delNum, delNum + 13).join(''), '')
          }
          console.log("AAAAAAAA")
          
        }else{
          s = s.replace(s.split('').splice(bIndex - delNum, delNum + 11).join(''), '')
          console.log('BBBBBBB')
        }
        
      }else{
        if(s.charAt(bIndex+11) === '*'){
          if(+s.charAt(bIndex + 13) === +s.charAt(bIndex + 13) && s.charAt(bIndex + 13) !== ' '){
            s = s.slice(bIndex + 14)
            console.log('regregregregregreg')
          }else{
            s = s.slice(bIndex + 13)
          }
          console.log('CCCCCCCCCCCCC')
        }else{
          s = s.slice(bIndex + 11)
          console.log('DDDDDDDDDDD')
        }
      }
      
      bIndex = s.indexOf(`${b}`)
      delNum = 1
      starIndex = bIndex + 11
      starIndexChar = s.charAt(starIndex)
      if(s.length > starIndex + 1){
        if(s.charAt(starIndex) === '*'){
          if(+s.charAt(bIndex + 13) === +s.charAt(bIndex + 13) && s.charAt(bIndex + 13) !== ' '){
            delNum = +s.slice(bIndex + 12, bIndex + 14)
          }else{
          delNum = +s.charAt(bIndex + 12)
          }
        }
      }
      console.log(bIndex, delNum, starIndex, starIndexChar, s)
    } 
    console.log('----------------------------------')
    return s
  }
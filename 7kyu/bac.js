// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
    let result = ''
    x.split('').forEach(x => {
      if(x === 'a'){
        result += 'b'
      }else if(x === 'b'){
        result += 'a'
      }else{
        result += 'c'
      }
    })
     return result
   }
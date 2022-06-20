// Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^bab. Note that aaa and bbb may be very large!

// For example, the last decimal digit of 979^797 is 999, since 97=47829699^7 = 478296997=4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2200)2300, which has over 109210^{92}1092 decimal digits, is 666. Also, please take 000^000 to be 111.

// You may assume that the input will always be valid.

// Examples
// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9    
// lastDigit("10","10000000000")  // returns 0



var lastDigit = function(str1, str2){
    if(str2 === '0'){
      return 1
    }
    str1 = Number(str1.slice(-1))
    str2 = Number(str2.slice(-2))
    let pow = (str2%4)
    console.log(pow)
    let result
    
    if(pow===0){
      result = (str1**4)
      result = result.toString()
      result = Number(result.slice(-1))
    }else{
      result = str1**pow
      console.log(result)
      result = result.toString()
      console.log(result)
      result = result.slice(-1)
      console.log(result)
      result = Number(result)
      console.log(result)
    }
    return result; // fix me
  }
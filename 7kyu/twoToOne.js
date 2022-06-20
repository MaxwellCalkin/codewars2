// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


// function longest(s1, s2) {
//     let result = new Set()
//     let resultArr = []
//     let resultStr = ''
//     const s1Arr = s1.split('')
//     const s2Arr = s2.split('')
//     s1Arr.forEach(x=> {
//       result.add(x)
//     })
//     s2Arr.forEach(x=> {
//       result.add(x)
//     })
//     result.forEach(x=> resultArr.push(x))
//     resultArr.sort()
//     resultArr.forEach(x=> resultStr += x)
//     return resultStr
//     // your code
//   }

const longest = (s1,s2) => [...new Set(s1+s2)].sort().join('')
// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits.
//kyu 4




function nextBigger(n){
    var d = n.toString().split('');
  
    var p = -1;
    for (var i = d.length-1; i > 0; i--) {
      if (+d[i] > +d[i-1]) {
        p = i-1;
        break;
      }
    }
  
    if (p == -1) return p;
  
    var right = d.splice(p);
  
    var pv = right.splice(0, 1)[0];
  
    var mm = null, mmi = null;
    for (var i = 0; i < right.length; i++) {
      if (right[i] > pv) {
        if (mm == null || right[i] < mm) {
          mm = right[i];
          mmi = i;
        }
      }
    }
  
    if (mmi == null) return -1;
  
    right.splice(mmi, 1);
    right.push(pv);
    right = right.sort();
  
    var ret = +d.concat([mm]).concat(right).join('');
    if (ret < n) return -1;
  
    return ret;
  }













//function nextBigger(n){
//     //your code here
//     String.n.split('')
//     if(n===n.sort((a,b)=>b-a)){
//       return -1
//     }

//     function perms(xs) {
//         if (!xs.length){
//             return [[]]
//         }
//         return xs.flatMap((x, i) => {
//             return perms(xs.filter((v, j) => i!==j)).map(vs => [x, ...vs])
//         })
//     }
    
//     function factorial(num){
//       let result = 1
//       for(let i = 1; i < num+1; i++)
//         result*=i
//       return result
//     }
    
//     let perms = []
//     let sorted = n.sort((a,b)=>a-b)

//     let sortedPerms = perms(sorted)
//     let index = sortedPerms.indexOf(n)
//     return sortedPerms[index+1]
// }




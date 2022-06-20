// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits.
//kyu 4
function nextBigger(){
    let d = String(n).split('')

    for(let i = d.length-1; i > -1; i--){
        let p = -1
        highest = -1
        if(+d[i]>highest){
            highest = +d[i]
        }else{
            p = i
            break
        }
    }

    if(p===-1){
        return -1
    }

    let right = d.splice(p)

    let pv = right.splice(0,1)[0]

    for(let i = 0; i < right.length; i++){
        let mm = null; let mmi = null
        if(right[i] > pv){
            if(right[i] < mm || mm = null){
                mm = right[i]
                mmi = i
            }
        }
    }

    if(mmi===null){
        return -1
    }

    right.splice(mmi,1)
    right.push(pv)
    right = right.sort()

    let ret = +d.concat(mm).concat(right).join('')

    return result

}











function nextBigger(n){
    var d = n.toString().split('');
  
    // find the pivot, the point (from right) where i > i-1
    var p = -1;
    for (var i = d.length-1; i > 0; i--) {
      if (+d[i] > +d[i-1]) {
        p = i-1;
        break;
      }
    }
  
    // if we are unable to find the pivot, skip
    if (p == -1) return p;
  
    // splice the digits in the pivot
    var right = d.splice(p);
  
    // extract pivot
    var pv = right.splice(0, 1)[0];
  
    // find the lowest number > pv
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
  
    // concat the left + new pivot + right part
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




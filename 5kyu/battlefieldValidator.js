function validateBattlefield(field){
    const hit = (row, col) => (row < 0 || col < 0 || row > 9 || col > 9) ? 0 : field[row][col]
    for(let ships = [10,0,0,0,0], row = 0; row < 10; row++){
        for(let col = 0; col < 10; col++){
            if(hit(row,col)){
                if (hit(row-1, col-1) || hit(row-1, col+1)) return false
                if(hit(row-1, col) && hit(row, col-1)) return false
                if ((field[row][col]+=hit(row-1, col)+hit(row, col-1)) > 4) return false
                ships[field[row][col]]++ 
                ships[field[row][col]-1]--
            }
        }
    }
    return [0,4,3,2,1].every((s,i) => s == ships[i])
}

console.log(validateBattlefield([
         [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
         [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
         [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
         [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
         [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
         [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]))




// function validateBattlefield(f) {
//     // write your magic here
//     let result = true
//     let bsAcross = []
//     let bsDown = []
//     let cruiserAcross = []
//     let cruiserDown = []
//     let destAcross = []
//     let destDown = []
//     let subAcross = []
//     let subDown = []
        
//         //check battleships
//     f.forEach((arr,arrIndex)=>{
//         for(let numIndex = 0; numIndex < 7; numIndex++){
//             if(1===arr[numIndex]===arr[numIndex+1]===arr[numIndex+2]===arr[numIndex+3]){
//                 bsAcross.push((arrIndex*10)+(numIndex+1))
//             }
//         }
//     })
//     for(let arrIndex = 0; arrIndex < 7; arrIndex++){
//         for(let numIndex = 0; numIndex < 10; numIndex++){
//             let arrPlusOne = arrIndex+1
//             let arrPlusTwo = arrIndex+2
//             let arrPlusThree = arrIndex+3
//             if(1===f[arrIndex][numIndex]===f[arrPlusOne][numIndex]===f[arrPlusTwo][numIndex]===f[arrPlusThree][numIndex]){
//                 let downStart = (arrIndex*10)+(numIndex+1)
//                 bsDown.push(downStart)
                
//             }
//         }
//     }
//         //check cruisers
//     f.forEach((arr,arrIndex)=>{
//         for(let numIndex = 0; numIndex < 8; numIndex++){
//             if(1===arr[numIndex]===arr[numIndex+1]===arr[numIndex+2]){
//             cruiserAcross.push((arrIndex*10)+(numIndex+1))
//             }
//         }
//     })
    
//     for(let arrIndex = 0; arrIndex < 8; arrIndex++){
//         for(let numIndex = 0; numIndex < 10; numIndex++){        
//             if(1===f[arrIndex][numIndex]===f[arrIndex+1][numIndex]===f[arrIndex+2][numIndex]){
//             cruiserDown.push((arrIndex*10)+(numIndex+1))
//             }
//         }
//     }    
//         //check destroyers
//     f.forEach((arr,arrIndex)=>{
//         for(let numIndex = 0; numIndex < 9; numIndex++){
//             if(1===arr[numIndex]===arr[numIndex+1]){
//                 destAcross.push((arrIndex*10)+(numIndex+1))
//             }   
//         }
//     })
//     for(let arrIndex = 0; arrIndex < 9; arrIndex++){
//         for(let numIndex = 0; numIndex < 10; numIndex++){    
//             if(1===f[arrIndex][numIndex]===f[arrIndex+1][numIndex]){
//                 destDown.push((arrIndex*10)+(numIndex+1))
//             }
//         }
//     }
//         //check subs
//     f.forEach((arr,arrIndex)=>{
//         for(let numIndex = 0; numIndex < 10; numIndex++){
//             if(1===arr[numIndex]){
//                 subAcross.push((arrIndex*10)+(numIndex+1))
//             }
//         }
//     })
//     for(let arrIndex = 0; arrIndex < 10; arrIndex++){
//         for(let numIndex = 0; numIndex < 10; numIndex++){        
//             if(1===f[arrIndex][numIndex]){
//               subDown.push((arrIndex*10)+(numIndex+1))
//             }
//         }
//     }
//     //check connecting ships
//   //------------------------------//
//   //------------------------------//
//   //------------------------------//
//   //------------------------------//
//     bsAcross.forEach(bs=>{
//       f.forEach((arr,row)=>{
//         arr.forEach((num,column)=>{
//           //battleshipAcross check
//           //check to the right
//           if(num===1){
//             if((row*10)+(column+1)===bs+4 || (row*10)+(column+1)===bs-11 || (row*10)+(column+1)===bs-10 || (row*10)+(column+1)===bs-9 || (row*10)+(column+1)===bs-8 || (row*10)+(column+1)===bs-7 || (row*10)+(column+1)===bs-6 || (row*10)+(column+1)===bs+9 || (row*10)+(column+1)===bs+10 || (row*10)+(column+1)===bs+11 || (row*10)+(column+1)===bs+12 || (row*10)+(column+1)===bs+13 || (row*10)+(column+1)===bs+14){
//               result = false
//             }
//           }
//         })
//       })
//     })
//     bsDown.forEach(bs=>{
//       f.forEach((arr,row)=>{
//         arr.forEach((num,column)=>{
//           if(num===1){
//             if((row*10)+(column+1)===bs-11 || (row*10)+(column+1)===bs-9 || (row*10)+(column+1)===bs-1 || (row*10)+(column+1)===bs+1 || (row*10)+(column+1)===bs+9 || (row*10)+(column+1)===bs+11 || (row*10)+(column+1)===bs+19 || (row*10)+(column+1)===bs+21 || (row*10)+(column+1)===bs+29 || (row*10)+(column+1)===bs+31 || (row*10)+(column+1)===bs+39 || (row*10)+(column+1)===bs+40 || (row*10)+(column+1)===bs+41){
//               result = false
//             }
//           }
//           //check corners
//         })
//       })
//     })
//     cruiserAcross.forEach(bs=>{
//       f.forEach((arr,row)=>{
//         arr.forEach((num,column)=>{
//           if(num===1){
//             if((row*10)+(column+1)===bs+3 || (row*10)+(column+1)===bs+9 || (row*10)+(column+1)===bs+10 || (row*10)+(column+1)===bs+11 || (row*10)+(column+1)===bs+12 || (row*10)+(column+1)===bs-11 || (row*10)+(column+1)===bs-10 || (row*10)+(column+1)===bs-9 || (row*10)+(column+1)===bs-8 || (row*10)+(column+1)===bs-7 || (row*10)+(column+1)===bs+13){
//               result = false
//             }
//           }
//         })
//       })
//     })
//     cruiserDown.forEach(bs=>{
//       f.forEach((arr,row)=>{
//         arr.forEach((num,column)=>{
//           if(num===1){
//             if((row*10)+(column+1)===bs-11 || (row*10)+(column+1)===bs-9 || (row*10)+(column+1)===bs-1 || (row*10)+(column+1)===bs+1 || (row*10)+(column+1)===bs+9 || (row*10)+(column+1)===bs+11 || (row*10)+(column+1)===bs+19 || (row*10)+(column+1)===bs+21 || (row*10)+(column+1)===bs+29 || (row*10)+(column+1)===bs+31 || (row*10)+(column+1)===bs+30){
//               result = false
//             }
//           }
//         })
//       })
//     })
//     destAcross.forEach(bs=>{
//       f.forEach((arr,row)=>{
//         arr.forEach((num,column)=>{
//           if(num===1){
//             if((row*10)+(column+1)===bs+2 || (row*10)+(column+1)===bs+9 || (row*10)+(column+1)===bs+10 || (row*10)+(column+1)===bs+11 || (row*10)+(column+1)===bs+12 || (row*10)+(column+1)===bs-11 || (row*10)+(column+1)===bs-10 || (row*10)+(column+1)===bs-9 || (row*10)+(column+1)===bs-8){
//               result = false
//             }
//           }
//         })
//       })
//     })
//     destDown.forEach(bs=>{
//       f.forEach((arr,row)=>{
//         arr.forEach((num,column)=>{
//           if(num===1){
//             if((row*10)+(column+1)===bs-11 || (row*10)+(column+1)===bs-9 || (row*10)+(column+1)===bs-1 || (row*10)+(column+1)===bs+1 || (row*10)+(column+1)===bs+9 || (row*10)+(column+1)===bs+11 || (row*10)+(column+1)===bs+19 || (row*10)+(column+1)===bs+21 || (row*10)+(column+1)===bs+20){
//               result = false
//             }
//           }
//         })
//       })
//     })
//     subAcross.forEach(bs=>{
//       f.forEach((arr,row)=>{
//         arr.forEach((num,column)=>{
//           if(num===1){
//             if((row*10)+(column+1)===bs+1 || (row*10)+(column+1)===bs+9 || (row*10)+(column+1)===bs+10 || (row*10)+(column+1)===bs+11 || (row*10)+(column+1)===bs-11 || (row*10)+(column+1)===bs-10 || (row*10)+(column+1)===bs-9){
//               result = false
//             }
//           }
//         })
//       })
//     })
//     subDown.forEach(bs=>{
//       f.forEach((arr,row)=>{
//         arr.forEach((num,column)=>{
//           if(num===1){
//             if((row*10)+(column+1)===bs-11 || (row*10)+(column+1)===bs-9 || (row*10)+(column+1)===bs-1 || (row*10)+(column+1)===bs+1 || (row*10)+(column+1)===bs+9 || (row*10)+(column+1)===bs+11 || (row*10)+(column+1)===bs+10){
//               result = false
//             }
//           }
//         })
//       })
//     })
//     console.log(bsDown)
//     if((bsAcross.length+bsDown.length) !== 1 || (cruiserAcross.length+cruiserDown.length) !== 2 || (destAcross.length+destDown.length) !== 3 || (subAcross.length+subDown.length) !== 4){
//       result = false
//     }
//     return `${result} - ${bsAcross} - ${cruiserDown} - ${cruiserAcross} - ${destDown} - ${destAcross}`
    
// }


// console.log(validateBattlefield([
//     [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//     [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//     [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]))
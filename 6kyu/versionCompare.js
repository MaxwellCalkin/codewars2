// Karan's company makes software that provides different features based on the version of operating system of the user.

// For finding which version is more recent, Karan uses the following method:

// function compareVersions (version1, version2) {
//   return parseFloat(version1) >= parseFloat(version2);
// }
// While this function worked for OS versions 10.6, 10.7, 10.8 and 10.9, the Operating system company just released OS version 10.10.

// Karan's function fails for the new version:

// compareVersions ("10.9", "10.10");       // returns true, while it should return false
// Karan now wants to spend some time to right a more robust version comparison function that works for any future version/sub-version updates.

// Help Karan write this function. Here are a few sample cases:

// compareVersions("11", "10");                    // returns true
// compareVersions("11", "11");                    // returns true
// compareVersions("10.4.6", "10.4");              // returns true
// compareVersions("10.4", "11");                  // returns false
// compareVersions("10.4", "10.10");               // returns false
// compareVersions("10.4.9", "10.5");              // returns false
// It can be assumed that version strings are non empty and only contain numeric literals and the character '.'.

const arraysAreEqual = (x,y) => {
    let result = true
    x.forEach((z,i) => {
      if(z !== y[i]){
        console.log('they are not equal')
        result = false
      }else if(x.length !== y.length){
        console.log('they are not the same length')
        result = false
      }
    }) 
    return result
  }
  
  function compareVersions (version1, version2) {
    //split versions by '.'
    //map them out to be all numbers
    //figure our the length of the longest array
    //for (let i = 0; i < maxLength; i++)
      //check each index to see greater or equal to or less
    
    let v1Array = version1.split('.').map(x=> +x)
    let v2Array = version2.split('.').map(x=> +x)
    
    console.log(arraysAreEqual(v1Array, v2Array))
    
    if(arraysAreEqual(v1Array, v2Array)){
      return true
    }
    
    let maxLength = Math.max(v1Array.length, v2Array.length)
    let minLength = Math.min(v1Array.length, v2Array.length)
    
    for(let i = 0; i < minLength; i++){
      if(v1Array[i] > v2Array[i]){
        return true
      }else if (v1Array[i] < v2Array[i]){
        return false
      }else if(i === minLength - 1){
        if(v1Array.length > v2Array.length){
          console.log('v1 length is bigger!')
          return true
        }else{
          console.log('here')
          return false
        }
      }
    }
    console.log('got to the end')
    return false
        // return parseFloat(version1) >= parseFloat(version2);
  }


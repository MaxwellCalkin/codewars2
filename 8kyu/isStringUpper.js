// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True


String.prototype.isUpperCase = function() {
    console.log(this.length)
    for (let i = 0; i < this.length; i++){
      if(this[i] !== this[i].toUpperCase()){
        return false
      }
    }
    return true
  }
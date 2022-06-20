// In this kata we mix some tasty fruit juice. We can add some components with certain amounts. Sometimes we pour out a bit of our juice. Then we want to find out, which concentrations our fruit juice has.

// Example:

// You take an empty jar for your juice
// Whenever the jar is empty, the concentrations are always 0
// Now you add 200 units of apple juice
// And then you add 200 units of banana juice
// Now the concentration of apple juice is 0.5 (50%)
// Then you pour out 200 units
// The concentration of apple juice is still 50%
// Then you add 200 units of apple juice again
// Now the concentration of apple juice is 0.75, while the concentration of banana juice is only 0.25 (300 units apple juice + 100 units banana juice)
// Complete the functions in order to provide this functionality. The test code for the example above can be found in the test fixture.
function Jar() {

    this.totalAmount = 0
    this.typesAmount = {}
  }
  
  Jar.prototype.add = function(amount, type) {
    if(this.typesAmount[type]){
        this.typesAmount[type] += amount
        this.totalAmount += amount
    }else{
        this.typesAmount[type] = amount
        this.totalAmount+=amount
    }
  };
  
  Jar.prototype.pourOut = function(amount) {
    Object.entries(this.typesAmount).forEach((x,i)=>{
      console.log(x)
      this.typesAmount[x[0]] = x[1]/this.totalAmount
    })
    console.log(this.typesAmount, this.totalAmount)
    this.totalAmount-=amount
    Object.entries(this.typesAmount).forEach(x=>{
      console.log(x)
      this.typesAmount[x[0]] = x[1] * this.totalAmount
      console.log(x)
      
    })
    console.log(this.typesAmount, this.totalAmount)
  };
  
  Jar.prototype.getTotalAmount = function() {
      return this.totalAmount
  };
  
  Jar.prototype.getConcentration = function(type) {
    if(!this.typesAmount[type]){
      return 0
    }
    return (this.typesAmount[type])/this.totalAmount
  }



// class Jar {
//     constructor(){
//         this.totalAmount = 0
//         this.typesAmount = {}
//     }

//     add(amount, type){
//         if(this.typesAmount[type]){
//             this.typesAmount[type] += amount
//         }else{
//         this.typesAmount[type] = amount
//         this.totalAmount+=amount
//         }
//     }
//     pourOut(amount){
//         this.totalAmount-=amount
//     }
//     getTotalAmount(){
//         return this.totalAmount
//     }
//     getConcentration(type){
//         return (this.typesAmount[type])/this.totalAmount
//     }
// }

let jar = new Jar
console.log(jar)


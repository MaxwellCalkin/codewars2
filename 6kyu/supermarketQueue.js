// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.






function queueTime(customers, n) {
    //slice customers into number of tills
    //subtract Math.min(...the slice) from each element in the slice, add it to result
    //splice the zeros with the next customers
    
    let result = 0
    let min = 0
    
    if(customers.length === 0){
      return 0
    }
    
    let theSlice = customers.slice(0,n)
    customers = customers.splice(n)
    
    while(customers.length !== 0){
      min = Math.min(...theSlice)
      console.log(theSlice, customers, min, result)
      result += min
      theSlice.forEach((x,i) =>{
        theSlice[i] -= min
        if(theSlice[i] === 0){
          if(customers.length !== 0){
            theSlice[i] = customers.shift()
          }
        }
      })
    }
    console.log(theSlice)
    result += Math.max(...theSlice)
    return result
    //TODO
  }
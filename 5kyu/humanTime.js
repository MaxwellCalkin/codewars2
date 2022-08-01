// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    let hours = 0
    let minutes = 0
    let secs = 0
    
    hours = String(Math.floor(seconds/3600))
    if(hours.length === 1){
      hours = `0${hours}`
    }
    minutes = String(Math.floor((seconds - (hours*3600))/60))
    if(minutes.length === 1){
      minutes = `0${minutes}`
    }
    secs = String(Math.floor(seconds - (hours*3600) - (minutes*60)))
    if(secs.length === 1){
      secs = `0${secs}`
    }
    
    return `${hours}:${minutes}:${secs}`;
  }
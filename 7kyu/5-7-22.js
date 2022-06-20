// Very basic, if the string can fit in the bath, it could fall in. We can not allow that in safety month! If the string can fit in, it's not safe so return false, otherwise return true, as the string couldn't fit in if it wanted to!

// A bath will look like this (for example):

// |~~~~~~~|
// Where ~ is the water and | is the side of the bath.

// Remember the sides of the bath (|) do not count as water! There will always be two sides.







function bath(string, bath){
  return string.length > bath.length-2
}
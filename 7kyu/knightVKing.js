// Knight vs King
// If you are not familiar with chess game you can learn more Here .

// Here is the chess board (rows, denoted by numbers, are called ranks, columns, denoted by a letter, are called files):

// alt text

// You put a Knight and a King in the board.

// Complete the method that tell us which one can capture the other one.

// You are provided with two object array; each contains an integer (the rank, first item) and a string/char (the file, second item) to show the position of the pieces in the chess board.

// Return:

// "Knight" if the knight is putting the king in check,
// "King" if the king is attacking the knight
// "None" if none of the above occur
// Example:

// knight = [7, "B"], king = [6, "C"]  ---> "King"
// Check the test cases and Happy coding :)

function knightVsKing(knightPosition, kingPosition) {
    const ALPH = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    
    let kingIn = ALPH.indexOf(kingPosition[1])
    let knightIn = ALPH.indexOf(knightPosition[1])
    
    if(Math.abs(knightPosition[0] - kingPosition[0]) < 2 && Math.abs(kingIn - knightIn) < 2){
      return "King"
    }else if(Math.abs(knightPosition[0] - kingPosition[0]) === 2 && Math.abs(kingIn - knightIn) === 1){
      return "Knight"
    }else if(Math.abs(knightPosition[0] - kingPosition[0]) === 1 && Math.abs(kingIn - knightIn) === 2){
      return "Knight"
    }else{
      return "None"
    }
  }
  
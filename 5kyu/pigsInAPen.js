// Dots and Boxes is a pencil-and-paper game for two players (sometimes more). It was first published in the 19th century by Édouard Lucas, who called it la pipopipette. It has gone by many other names, including the game of dots, boxes, dot to dot grid, and pigs in a pen.

// Starting with an empty grid of dots, two players take turns adding a single horizontal or vertical line between two unjoined adjacent dots. The player who completes the fourth side of a 1×1 box earns one point and takes another turn only if another box can be made. (A point is typically recorded by placing a mark that identifies the player in the box, such as an initial). The game ends when no more lines can be placed. The winner is the player with the most points. The board may be of any size. When short on time, a 2×2 board (a square of 9 dots) is good for beginners. A 5×5 is good for experts. (Source Wikipedia)
// Squares
// Task
// Your task is to complete the class called Game. You will be given the board size as an integer board that will be between 1 and 26, therefore the game size will be board x board. You will be given an array of lines that have already been taken, so you must complete all possible squares.
// Rules
// 1.  The integer board will be passed when the class is initialised.

// 2.  board will be between 1 and 26.

// 3.  The lines array maybe empty or contain a list of line integers.

// 4.  You can only complete a square if 3 out of the 4 sides are already complete.

// 5.  The lines array that is passed into the play() function may not be sorted numerically!
// Returns
// Return an array of all the lines filled in including the original lines.

// Return array must be sorted numerically.

// Return array must not contain duplicate integers.
// Example 1
// Initialise
// Initialise a board of 2 squares by 2 squares where board = 2


// Line Numbering

// Line Input
// So for the line input of [1, 3, 4] the below lines would be complete

// to complete the square line 6 is needed

// Game Play
// board = 2;
// lines = [1, 3, 4];
// game = new Game(board);
// game.play(lines) => [1, 3, 4, 6]
// Example 2
// Initialise
// board = 2;
// lines = [1, 2, 3, 4, 5, 8, 10, 11, 12];
// game = Game.new(board);
// game.play(lines) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// Solution


// Good luck and enjoy!


function Game(board){
    this.board = board;
  }
  
  Game.prototype.play = function(lines){
    function checkmysquare(squares, arr){
      let num2 = 0;
      let xt = 0;
      arr.forEach(function(x) {
        if (squares.includes(x)){num2++}else{xt=x}
      })
      if (num2==arr.length-1){squares.push(xt)}
      return squares;
    }
  
    let board = this.board;
  
    for(z=0;z<lines.length;z++){
      let n = lines[z];
      let topbot = true;
      let num = 0;
      for(x=1;x<=n;x++){
        num++;
        if (topbot && num == board){
          num = 0;
          topbot = false;
        }
        else if (!topbot && num == board+1) {
          num = 0;
          topbot = true;
        }
      }
      if (num==0){topbot = !topbot};
      if (topbot){
        lines = checkmysquare(lines, [n-board-1, n-board, n-(board*2)-1])
        lines = checkmysquare(lines, [n+board+1, n+board, n+(board*2)+1])
      } else {
        if (num != 0){lines = checkmysquare(lines, [n+1, n-board, n+board+1])}
        if (num != 1){lines = checkmysquare(lines, [n-1, n+board, n-board-1])}
      }
    }
    return lines.sort(function(a, b){return a - b});
  }
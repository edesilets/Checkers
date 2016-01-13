// In this exercise, we'll be laying the groundwork for a Checkers game. Your task is to implement two functions:

// setSquare, which places a player (either 'R' or 'B') at a particular row and column on the board.
// getPieceAt, which returns the piece at a particular row and column; if there's no piece at that position, it should return null.
var checkerboard = [[null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null]];

var setSquare = function(player, row, col) {
  // Your Code Here
  checkerboard[row][col] = player;
}

var getPieceAt = function(row, col) {
  // Your Code Here
  var pieceType = checkerboard[row][col];
  return pieceType;
}
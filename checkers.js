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

var player1 = 'R';
var player2 = 'B';

var setSquare = function(player, row, col) {
  // Your Code Here
  checkerboard[row][col] = player;
}

var getPieceAt = function(row, col) {
  // Your Code Here
  var pieceType = checkerboard[row][col];
  return pieceType;
}

function clearBoard() {
	//set all spaces to null
	var boardRows = checkerboard.length-1;
	var boardCols = checkerboard[0].length-1;

	for (var i = boardRows; i >= 0; i--) {
		for (var z = boardCols; z >= 0; z--) {
			checkerboard[i][z] = null;
		}
	}
}

function setUpRed() {
	var boardRows = checkerboard.length-1;
	var boardCols = checkerboard[0].length-1;

	for (var i = 0; i <= boardCols; i+=2) {
			checkerboard[0][i] = player1;
			checkerboard[2][i] = player1;
	}
	for (var z = 1; z <= boardCols; z+=2) {
			checkerboard[1][i] = player1;
	}
}
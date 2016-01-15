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
	var boardRows = checkerboard.length;

	for (var i = 0; i < boardRows; i++) {
		for (var z = 0; z < boardRows; z++) {
			checkerboard[i][z] = null;
		}
	}
}

function setUpRed() {
	var boardCols = checkerboard[0].length;

	for (var i = 0; i < boardCols; i+=2) {
			checkerboard[0][i] = player1;
			checkerboard[2][i] = player1;
	}
	for (var z = 1; z < boardCols; z+=2) {
			checkerboard[1][z] = player1;
	}
}

function setUpBlack() {
	var boardCols = checkerboard[0].length;

	for (var i = 1; i < boardCols; i+=2) {
			checkerboard[5][i] = player2; //Replace first index with Var
			checkerboard[7][i] = player2; //Replace first index with Var
	}
	for (var z = 0; z < boardCols; z+=2) {
    	checkerboard[6][z] = player2; //Replace first index with Var
	}
}

var pieces = {
				'red': [[0,0], [0,2], [0,4], [0,6], [1,1], [1,3], [1,5], [1,7], [2,0], [2,2], [2,4], [2,6]],
				'black': [[5,1], [5,3], [5,5], [5,7], [6,0], [6,2], [6,4], [6,6], [7,1], [7,3], [7,5], [7,7]]
	}
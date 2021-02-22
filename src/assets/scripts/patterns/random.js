export const Random_maze = function(board) {
  var height = board.length;
  var width = board[0].length;
  var distribution = 0.25;
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      if (Math.random() <= distribution && board[i][j].Empty) {
        board[i][j].Wall = true;
        board[i][j].Empty = false;
      }
    }
  }
};

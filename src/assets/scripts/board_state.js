const Clear_All = function(board = this.board.matrix) {
  this.has_executed = false;
  this.executed_algorithm = null;
  for (var i = 0; i < this.board.y; i++) {
    for (var j = 0; j < this.board.x; j++) {
      board[i][j].Wall = false;
      board[i][j].Visited = false;
      board[i][j].Path = false;
      board[i][j].Instant = false;
      board[i][j].Empty = !(board[i][j].Origin || board[i][j].Destination);
    }
  }
};
const Clear_Path = function(board = this.board.matrix) {
  this.has_executed = false;
  this.executed_algorithm = null;
  for (var i = 0; i < this.board.y; i++) {
    for (var j = 0; j < this.board.x; j++) {
      board[i][j].Empty = !(
        board[i][j].Origin ||
        board[i][j].Destination ||
        board[i][j].Wall
      );
      board[i][j].Visited = false;
      board[i][j].Instant = false;
      board[i][j].Path = false;
    }
  }
};
const Reset = function() {
  this.has_executed = false;
  this.executed_algorithm = null;
  this.board = this.Create_Matrix(this.padding, this.width);
};

export { Clear_All, Clear_Path, Reset };

export const start = function(board, y, x) {
  if (!this.is_locked) {
    if (board[y][x].Origin || board[y][x].Destination) {
      this.mode = "drag";
      if (board[y][x].Origin) {
        this.dragged = "O";
      } else {
        this.dragged = "D";
      }
    } else {
      if (board[y][x].Wall) {
        this.mode = "remove";
        board[y][x].Empty = true;
        board[y][x].Wall = false;
      } else {
        if (board[y][x].Empty) {
          this.mode = "add";
          board[y][x].Wall = true;
          board[y][x].Empty = false;
        }
      }
    }
    this.is_held = true;
  }
};
export const end = function() {
  if (this.mode == "drag" && this.is_held) {
    if (this.dragged == "O") {
      this.board.matrix[this.current_y][this.current_x].Origin = true;
    } else {
      this.board.matrix[this.current_y][this.current_x].Destination = true;
    }
  }
  this.is_held = false;
};
//Main method for adding and removing walls
export const manage_walls = function(board, y, x) {
  if (this.is_held) {
    this.current_x = x;
    this.current_y = y;
    if (this.mode == "drag") {
      if (this.dragged == "O") {
        board[y][x].Origin = true;
        this.board.origin = y * this.board.x + x;
      } else {
        board[y][x].Destination = true;
        this.board.destination = y * this.board.x + x;
      }
      if (this.has_executed) {
        this.launch_algorithm(this.executed_algorithm, true);
      }
    } else {
      if (this.mode == "add" && board[y][x].Empty) {
        board[y][x].Wall = true;
        board[y][x].Empty = false;
      } else {
        if (this.mode == "remove" && board[y][x].Wall) {
          board[y][x].Empty = true;
          board[y][x].Wall = false;
        }
      }
    }
  }
};

export const remove = function(board, y, x) {
  if (this.is_held) {
    if (this.mode == "drag") {
      if (this.dragged == "O") {
        board[y][x].Origin = false;
      } else {
        board[y][x].Destination = false;
      }
      board[y][x].Empty = true;
    }
  }
};

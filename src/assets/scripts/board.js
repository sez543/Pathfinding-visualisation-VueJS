export const Board = function(x, y, x_pos_o, x_pos_d, y_pos) {
  this.x = x;
  this.y = y;
  this.matrix = new Array(y);
  for (var i = 0; i < y; i++) {
    this.matrix[i] = new Array(x);
    for (var j = 0; j < x; j++) {
      this.matrix[i][j] = {
        Empty: true,
        Origin: false,
        Destination: false,
        Wall: false,
        Visited: false,
        Path: false,
        Instant: false,
      };
    }
  }
  this.matrix[y_pos][x_pos_o].Origin = true;
  this.matrix[y_pos][x_pos_o].Empty = false;
  this.matrix[y_pos][x_pos_d].Destination = true;
  this.matrix[y_pos][x_pos_d].Empty = false;
  this.origin = y_pos * x + x_pos_o;
  this.destination = y_pos * x + x_pos_d;
};

export const Create_Matrix = function(p, a) {
  a -= 1;
  var width = Math.floor((window.innerWidth - 2 * p) / a);
  var h = document.querySelector(".md-toolbar").scrollHeight;
  var height = Math.floor(Math.floor((window.innerHeight - h - 2 * p) / a));
  var y_pos = Math.floor(height / 2);
  var x_pos_o = Math.floor(width / 3);
  var x_pos_d = Math.floor((2 * width) / 3);
  var b = new this.Board(width, height, x_pos_o, x_pos_d, y_pos);
  return b;
};

export const Create_Adj_List = function(board) {
  var width = board[0].length;
  var height = board.length;
  var s = width * height;
  var list = new Array(s);
  for (var i = 0; i < s; i++) {
    var current = [];
    var y = Math.floor(i / width);
    var x = i % width;
    if (!board[y][x].Wall || board[y][x].Origin || board[y][x].Destination) {
      //Top
      if (y - 1 >= 0) {
        if (
          board[y - 1][x].Wall == false ||
          board[y - 1][x].Origin ||
          board[y - 1][x].Destination
        ) {
          current.push((y - 1) * width + x);
        }
      }
      //Bottom
      if (y + 1 < height) {
        if (
          board[y + 1][x].Wall == false ||
          board[y + 1][x].Origin ||
          board[y + 1][x].Destination
        ) {
          current.push((y + 1) * width + x);
        }
      }
      //Left
      if (x - 1 >= 0) {
        if (
          board[y][x - 1].Wall == false ||
          board[y][x - 1].Origin ||
          board[y][x - 1].Destination
        ) {
          current.push(y * width + x - 1);
        }
      }
      //Right
      if (x + 1 < width) {
        if (
          board[y][x + 1].Wall == false ||
          board[y][x + 1].Origin ||
          board[y][x + 1].Destination
        ) {
          current.push(y * width + x + 1);
        }
      }
      // //Add if you want to include diagonals
      // //Top-Left
      // if (y - 1 >= 0 && x - 1 >= 0) {
      //   if (board[y - 1][x - 1].Wall == false) {
      //     current.push((y - 1) * width + x - 1);
      //   }
      // }
      // //Top-Right
      // if (y - 1 >= 0 && x + 1 < width) {
      //   if (board[y - 1][x + 1].Wall == false) {
      //     current.push((y - 1) * width + x + 1);
      //   }
      // }
      // //Bottom-Left
      // if (y + 1 < height && x - 1 >= 0) {
      //   if (board[y + 1][x - 1].Wall == false) {
      //     current.push((y + 1) * width + x - 1);
      //   }
      // }
      // //Bottom-Right
      // if (y + 1 < height && x + 1 < width) {
      //   if (board[y + 1][x + 1].Wall == false) {
      //     current.push((y + 1) * width + x + 1);
      //   }
      // }
    }
    list[i] = current;
  }
  return list;
};

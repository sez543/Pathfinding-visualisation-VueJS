export const Recursive_Pattern = async function(board) {
  var ToAnimate = [];
  var height = board.length;
  var width = board[0].length;
  var i = 0;
  var j = 0;
  for (i = 0; i < height; i++) {
    for (j = 0; j < width; j++) {
      if (board[i][j].Empty) {
        board[i][j].Wall = true;
        board[i][j].Empty = false;
      }
    }
  }

  var r = Math.floor(this.board.origin / this.board.x);
  var c = this.board.origin % this.board.x;

  recursion(board, r, c, width, height, ToAnimate);
  for (i = 0; i < height; i++) {
    for (j = 0; j < width; j++) {
      if (board[i][j].Empty) {
        board[i][j].Wall = true;
        board[i][j].Empty = false;
      }
    }
  }
  await this.Animate_Walls_Exclusixe(board, ToAnimate).finally(() => {
    return new Promise(function(resolve) {
      resolve();
    });
  });
};

const recursion = function(maze, r, c, width, height, ToAnimate) {
  var randDirs = generateRandomDirections();
  for (var i = 0; i < randDirs.length; i++) {
    switch (randDirs[i]) {
      case 1:
        if (r - 2 <= 0) continue;
        if (maze[r - 2][c].Wall) {
          maze[r - 2][c].Wall = false;
          maze[r - 2][c].Empty = true;
          maze[r - 1][c].Wall = false;
          maze[r - 1][c].Empty = true;
          ToAnimate.push([r - 2, c]);
          ToAnimate.push([r - 1, c]);
          recursion(maze, r - 2, c, width, height, ToAnimate);
        }
        break;
      case 2:
        if (c + 2 >= width - 1) continue;
        if (maze[r][c + 2].Wall) {
          maze[r][c + 2].Wall = false;
          maze[r][c + 2].Empty = true;
          maze[r][c + 1].Wall = false;
          maze[r][c + 1].Empty = true;
          ToAnimate.push([r, c + 2]);
          ToAnimate.push([r, c + 1]);
          recursion(maze, r, c + 2, width, height, ToAnimate);
        }
        break;
      case 3:
        if (r + 2 >= height - 1) continue;
        if (maze[r + 2][c].Wall) {
          maze[r + 2][c].Wall = false;
          maze[r + 2][c].Empty = true;
          maze[r + 1][c].Wall = false;
          maze[r + 1][c].Empty = true;
          ToAnimate.push([r + 2, c]);
          ToAnimate.push([r + 1, c]);
          recursion(maze, r + 2, c, width, height, ToAnimate);
        }
        break;
      case 4:
        if (c - 2 <= 0) continue;
        if (maze[r][c - 2].Wall) {
          maze[r][c - 2].Wall = false;
          maze[r][c - 2].Empty = true;
          maze[r][c - 1].Wall = false;
          maze[r][c - 1].Empty = true;
          ToAnimate.push([r, c - 2]);
          ToAnimate.push([r, c - 1]);
          recursion(maze, r, c - 2, width, height, ToAnimate);
        }
        break;
    }
  }
};

const generateRandomDirections = function() {
  var randoms = [];
  for (var i = 0; i < 4; i++) {
    randoms.push(i + 1);
  }
  for (let i = randoms.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = randoms[i];
    randoms[i] = randoms[j];
    randoms[j] = temp;
  }
  return randoms;
};

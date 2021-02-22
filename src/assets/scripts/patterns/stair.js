export const Stair_Pattern = async function(board) {
  var ToAnimate = [];
  var width = board[0].length;
  var direction = 1;
  var x = 0;
  var y = 0;
  while (x < width - 2) {
    if (direction == 1) {
      for (y = board.length - 2; y >= 1; y--) {
        if (board[y][x].Empty) {
          board[y][x].Empty = false;
          ToAnimate.push([y, x]);
        }
        if (x == width - 2) {
          break;
        } else {
          x++;
        }
      }
    } else {
      for (y = 1; y < board.length - 1; y++) {
        if (board[y][x].Empty) {
          board[y][x].Empty = false;
          ToAnimate.push([y, x]);
        }
        if (x == width - 2) {
          break;
        } else {
          x++;
        }
      }
    }
    direction = -direction;
  }
  await this.Animate_Walls_Inclusive(board, ToAnimate).finally(() => {
    return new Promise(function(resolve) {
      resolve();
    });
  });
};

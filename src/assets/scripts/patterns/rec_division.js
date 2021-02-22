export const Recursive_Division = async function(
  board,
  rowStart,
  rowEnd,
  colStart,
  colEnd,
  orientation,
  ToAnimate = [],
  is_first = true
) {
  var width = board[0].length;
  var height = board.length;
  var i = 0;
  var r = 0;
  var c = 0;
  if (rowEnd < rowStart || colEnd < colStart) {
    return;
  }
  if (is_first) {
    for (i = 0; i < width; i++) {
      if (board[0][i].Empty) {
        board[0][i].Empty = false;
        ToAnimate.push([0, i]);
      }
    }
    for (i = 0; i < width; i++) {
      if (board[height - 1][i].Empty) {
        board[height - 1][i].Empty = false;
        ToAnimate.push([height - 1, i]);
      }
    }
    for (i = 0; i < height; i++) {
      if (board[i][0].Empty) {
        board[i][0].Empty = false;
        ToAnimate.push([i, 0]);
      }
    }
    for (i = 0; i < height; i++) {
      if (board[i][width - 1].Empty) {
        board[i][width - 1].Empty = false;
      }
      ToAnimate.push([i, width - 1]);
    }
  }
  let possibleRows = [];
  let possibleCols = [];
  if (orientation == "h") {
    possibleRows = [];
    for (i = rowStart; i <= rowEnd; i += 2) {
      possibleRows.push(i);
    }
    possibleCols = [];
    for (i = colStart - 1; i <= colEnd + 1; i += 2) {
      possibleCols.push(i);
    }
    let randomRowIndex = Math.floor(Math.random() * possibleRows.length);
    let randomColIndex = Math.floor(Math.random() * possibleCols.length);
    let currentRow = possibleRows[randomRowIndex];
    let colRandom = possibleCols[randomColIndex];
    for (c = 0; c < width; c++) {
      if (c !== colRandom && c >= colStart - 1 && c <= colEnd + 1) {
        if (board[currentRow][c].Empty) {
          board[currentRow][c].Empty = false;
          ToAnimate.push([currentRow, c]);
        }
      }
    }
    if (currentRow - 2 - rowStart > colEnd - colStart) {
      Recursive_Division(
        board,
        rowStart,
        currentRow - 2,
        colStart,
        colEnd,
        orientation,
        ToAnimate,
        false
      );
    } else {
      Recursive_Division(
        board,
        rowStart,
        currentRow - 2,
        colStart,
        colEnd,
        "v",
        ToAnimate,
        false
      );
    }
    if (rowEnd - (currentRow + 2) > colEnd - colStart) {
      Recursive_Division(
        board,
        currentRow + 2,
        rowEnd,
        colStart,
        colEnd,
        orientation,
        ToAnimate,
        false
      );
    } else {
      Recursive_Division(
        board,
        currentRow + 2,
        rowEnd,
        colStart,
        colEnd,
        "v",
        ToAnimate,
        false
      );
    }
  } else {
    possibleCols = [];
    for (i = colStart; i <= colEnd; i += 2) {
      possibleCols.push(i);
    }
    possibleRows = [];
    for (i = rowStart - 1; i <= rowEnd + 1; i += 2) {
      possibleRows.push(i);
    }
    let randomColIndex = Math.floor(Math.random() * possibleCols.length);
    let randomRowIndex = Math.floor(Math.random() * possibleRows.length);
    let currentCol = possibleCols[randomColIndex];
    let rowRandom = possibleRows[randomRowIndex];

    for (r = 0; r < height; r++) {
      if (r !== rowRandom && r >= rowStart - 1 && r <= rowEnd + 1) {
        if (board[r][currentCol].Empty) {
          board[r][currentCol].Empty = false;
          ToAnimate.push([r, currentCol]);
        }
      }
    }
    if (rowEnd - rowStart > currentCol - 2 - colStart) {
      Recursive_Division(
        board,
        rowStart,
        rowEnd,
        colStart,
        currentCol - 2,
        "h",
        ToAnimate,
        false
      );
    } else {
      Recursive_Division(
        board,
        rowStart,
        rowEnd,
        colStart,
        currentCol - 2,
        orientation,
        ToAnimate,
        false
      );
    }
    if (rowEnd - rowStart > colEnd - (currentCol + 2)) {
      Recursive_Division(
        board,
        rowStart,
        rowEnd,
        currentCol + 2,
        colEnd,
        "h",
        ToAnimate,
        false
      );
    } else {
      Recursive_Division(
        board,
        rowStart,
        rowEnd,
        currentCol + 2,
        colEnd,
        orientation,
        ToAnimate,
        false
      );
    }
  }
  if (is_first) {
    await this.Animate_Walls_Inclusive(board, ToAnimate).finally(() => {
      return new Promise(function(resolve) {
        resolve();
      });
    });
  }
};

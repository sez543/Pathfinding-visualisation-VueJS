export const Animate_Visited = async function(board, stack) {
  for (var i in stack) {
    board[stack[i][0]][stack[i][1]].Visited = true;
    await new Promise((y) => setTimeout(y, 10));
  }
  return new Promise(function(resolve) {
    resolve();
  });
};
export const Animate_Visited_Instant = async function(board, stack) {
  for (var i in stack) {
    board[stack[i][0]][stack[i][1]].Visited = true;
    board[stack[i][0]][stack[i][1]].Instant = true;
  }
  return new Promise(function(resolve) {
    resolve();
  });
};
export const Animate_Path = async function(board, stack) {
  for (var i in stack) {
    board[stack[i][0]][stack[i][1]].Visited = false;
    board[stack[i][0]][stack[i][1]].Path = true;
    await new Promise((y) => setTimeout(y, 10));
  }
  return new Promise(function(resolve) {
    resolve();
  });
};
export const Animate_Path_Instant = async function(board, stack) {
  for (var i in stack) {
    board[stack[i][0]][stack[i][1]].Visited = false;
    board[stack[i][0]][stack[i][1]].Path = true;
    board[stack[i][0]][stack[i][1]].Instant = true;
  }
  return new Promise(function(resolve) {
    resolve();
  });
};
export const Animate_Walls_Exclusixe = async function(board, stack) {
  for (var i in stack) {
    board[stack[i][0]][stack[i][1]].Wall = false;
    board[stack[i][0]][stack[i][1]].Empty = true;
    await new Promise((y) => setTimeout(y, 5));
  }
  return new Promise(function(resolve) {
    resolve();
  });
};
export const Animate_Walls_Inclusive = async function(board, stack) {
  for (var i in stack) {
    board[stack[i][0]][stack[i][1]].Wall = true;
    board[stack[i][0]][stack[i][1]].Empty = false;
    await new Promise((y) => setTimeout(y, 10));
  }
  return new Promise(function(resolve) {
    resolve();
  });
};

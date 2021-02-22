import { A_star } from "./algorithms/a_star.js";
import { Dijkstra } from "./algorithms/dijkstra.js";
import { BFS } from "./algorithms/bfs.js";
import { DFS } from "./algorithms/dfs.js";

const printPath = async function(
  board,
  parent,
  j,
  instant,
  ToAnimate = [],
  first = true
) {
  if (parent[j] == -1) {
    return;
  }
  this.printPath(board, parent, parent[j], instant, ToAnimate, false);
  ToAnimate.push([Math.floor(j / board[0].length), j % board[0].length]);
  if (first) {
    if (instant) {
      await this.Animate_Path_Instant(board, ToAnimate);
    } else {
      await this.Animate_Path(board, ToAnimate);
    }
  }
};

export { A_star, Dijkstra, BFS, DFS, printPath };

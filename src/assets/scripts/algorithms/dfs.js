export const DFS = async function(
  list,
  start,
  end,
  instant,
  width = this.board.x
) {
  this.has_executed = true;
  this.executed_algorithm = "dfs";
  var ToAnimate = [];
  var size = list.length;
  var visited = new Array(size);
  visited.fill(false);
  visited[start] = true;
  var i = 0;

  var stack = [start];

  var current = start;

  while (current != end) {
    current = stack.pop();
    var adj = list[current];
    ToAnimate.push([Math.floor(current / width), current % width]);
    for (i = 0; i < adj.length; i++) {
      if (visited[adj[i]] == false) {
        visited[adj[i]] = true;
        stack.push(adj[i]);
      }
    }
  }
  if (instant) {
    await this.Animate_Visited_Instant(this.board.matrix, ToAnimate).finally(
      () => {
        return new Promise(function(resolve) {
          resolve();
        });
      }
    );
  } else {
    await this.Animate_Visited(this.board.matrix, ToAnimate).finally(() => {
      return new Promise(function(resolve) {
        resolve();
      });
    });
  }
};

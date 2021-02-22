export const BFS = async function(
  list,
  start,
  end,
  instant,
  width = this.board.x
) {
  this.has_executed = true;
  this.executed_algorithm = "bfs";
  var ToAnimate = [];
  var size = list.length;
  var visited = new Array(size);
  var i = 0;
  visited.fill(false);
  visited[start] = true;

  var queue = [start];

  var current = start;

  while (current != end) {
    current = queue.shift();
    ToAnimate.push([Math.floor(current / width), current % width]);
    var adj = list[current];
    for (i = 0; i < adj.length; i++) {
      if (visited[adj[i]] == false) {
        visited[adj[i]] = true;
        queue.push(adj[i]);
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

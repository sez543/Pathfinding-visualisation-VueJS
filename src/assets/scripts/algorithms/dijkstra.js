export const Dijkstra = async function(arr, src, dest, instant) {
  this.has_executed = true;
  this.executed_algorithm = "dijkstra";
  var ToAnimate = [];

  var width = this.board.x;
  var V = arr.length;
  var dist = new Array(V);
  var sptSet = new Array(V);
  var parent = new Array(V);

  for (var i = 0; i < V; i++) {
    parent[i] = -1;
    dist[i] = Number.MAX_SAFE_INTEGER;
    sptSet[i] = false;
  }

  dist[src] = 0;

  for (var count = 0; count < V - 1; count++) {
    var u = minDistance(dist, sptSet, V);
    if (u == -1) {
      break;
    }
    if (u == dest) {
      break;
    }
    sptSet[u] = true;
    if (u != src) {
      ToAnimate.push([Math.floor(u / width), u % width]);
    }
    for (var v = 0; v < arr[u].length; v++) {
      var c = arr[u][v];
      if (
        !sptSet[c] &&
        dist[u] != Number.MAX_SAFE_INTEGER &&
        dist[u] + 1 < dist[c]
      ) {
        parent[c] = u;
        dist[c] = dist[u] + 1;
      }
    }
  }
  if (instant) {
    await this.Animate_Visited_Instant(this.board.matrix, ToAnimate)
      .then(() => {
        return this.printPath(this.board.matrix, parent, dest, true);
      })
      .finally(() => {
        return new Promise(function(resolve) {
          resolve();
        });
      });
  } else {
    await this.Animate_Visited(this.board.matrix, ToAnimate)
      .then(() => {
        return this.printPath(this.board.matrix, parent, dest, false);
      })
      .finally(() => {
        return new Promise(function(resolve) {
          resolve();
        });
      });
  }
};
const minDistance = function(dist, sptSet, V) {
  var min = Number.MAX_SAFE_INTEGER;
  var min_index = -1;
  for (var v = 0; v < V; v++) {
    if (sptSet[v] == false && dist[v] < min) {
      min = dist[v];
      min_index = v;
    }
  }
  return min_index;
};

export const A_star = async function(graph, src, dest, instant) {
  this.has_executed = true;
  this.executed_algorithm = "a*";
  var ToAnimate = [];

  var width = this.board.x;

  var V = graph.length;

  var dist = new Array(V);
  var sptSet = new Array(V);
  var parent = new Array(V);
  var h = new Array(V);

  var x_dest = Math.floor(dest % width);
  var y_dest = Math.floor(dest / width);

  for (var i = 0; i < V; i++) {
    parent[i] = -1;
    dist[i] = Number.MAX_SAFE_INTEGER;
    sptSet[i] = false;
    var x = Math.floor(i % width);
    var y = Math.floor(i / width);
    h[i] = distance(x_dest, y_dest, x, y);
  }

  dist[src] = 0;

  for (var count = 0; count < V - 1; count++) {
    var u = MinF(dist, sptSet, V, h);
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
    for (var v = 0; v < graph[u].length; v++) {
      var c = graph[u][v];
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

const distance = function(x1, y1, x2, y2) {
  //Returns the Manhatan distance
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};

const MinF = function(dist, sptSet, V, h) {
  var min = Number.MAX_SAFE_INTEGER;
  var min_h = Number.MAX_SAFE_INTEGER;
  var min_index = -1;
  for (var v = 0; v < V; v++) {
    if (sptSet[v] == false) {
      if (dist[v] + h[v] < min || (dist[v] + h[v] == min && h[v] < min_h)) {
        min = dist[v] + h[v];
        min_index = v;
        min_h = h[v];
      }
    }
  }
  return min_index;
};

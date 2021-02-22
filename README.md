# project

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

```js
//Recursive approach
    Reccursive_Pattern: function(board) {
      var height = board.length;
      var width = board[0].length;
      for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
          if (board[i][j] == "") {
            board[i][j] = "w";
            var t = document.querySelector(`[id*="${i} ${j}"]`);
            t.classList.add("wall");
          }
        }
      }

      var r = Math.floor(Math.random() * (height + 1));
      if (r % 2 == 0) {
        if (r == height) {
          r--;
        } else {
          r++;
        }
      }

      var c = Math.floor(Math.random() * (width + 1));
      if (c % 2 == 0) {
        if (c == width) {
          c--;
        } else {
          c++;
        }
      }

      if (board[r][c] == "w") {
        board[r][c] = "";
        t = document.querySelector(`[id*="${r} ${c}"]`);
        t.classList.remove("wall");
      }

      this.recursion(board, r, c, width, height);
      return board;
    },
    recursion: function(maze, r, c, width, height) {
      var randDirs = this.generateRandomDirections();
      var t = null;
      for (var i = 0; i < randDirs.length; i++) {
        switch (randDirs[i]) {
          case 1:
            if (r - 2 <= 0) continue;
            if (maze[r - 2][c] == "w") {
              maze[r - 2][c] = "";
              maze[r - 1][c] = "";
              t = document.querySelector(`[id*="${r - 2} ${c}"]`);
              t.classList.remove("wall");
              t = document.querySelector(`[id*="${r - 1} ${c}"]`);
              t.classList.remove("wall");
              this.recursion(maze, r - 2, c, width, height);
            }
            break;
          case 2:
            if (c + 2 >= width - 1) continue;
            if (maze[r][c + 2] == "w") {
              maze[r][c + 2] = "";
              maze[r][c + 1] = "";
              t = document.querySelector(`[id*="${r} ${c + 2}"]`);
              t.classList.remove("wall");
              t = document.querySelector(`[id*="${r} ${c + 1}"]`);
              t.classList.remove("wall");
              this.recursion(maze, r, c + 2, width, height);
            }
            break;
          case 3:
            if (r + 2 >= height - 1) continue;
            if (maze[r + 2][c] == "w") {
              maze[r + 2][c] = "";
              maze[r + 1][c] = "";
              t = document.querySelector(`[id*="${r + 2} ${c}"]`);
              t.classList.remove("wall");
              t = document.querySelector(`[id*="${r + 1} ${c}"]`);
              t.classList.remove("wall");
              this.recursion(maze, r + 2, c, width, height);
            }
            break;
          case 4:
            if (c - 2 <= 0) continue;
            if (maze[r][c - 2] == "w") {
              maze[r][c - 2] = "";
              maze[r][c - 1] = "";
              t = document.querySelector(`[id*="${r} ${c - 2}"]`);
              t.classList.remove("wall");
              t = document.querySelector(`[id*="${r} ${c - 1}"]`);
              t.classList.remove("wall");
              this.recursion(maze, r, c - 2, width, height);
            }
            break;
        }
      }
    },
    generateRandomDirections: function() {
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
    },
    //End
```

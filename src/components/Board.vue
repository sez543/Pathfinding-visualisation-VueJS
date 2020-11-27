<template>
  <div class="board" :style="cssVarsBoard()">
    <div v-for="(col, i) in board" :key="i" :data-list-id="col.id" class="col">
      <div
        class="tile"
        v-for="(tiles, index) in col"
        :key="index"
        :id="tiles"
        :data-list-id="tiles.id"
        :style="cssVarsTile()"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.board {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.col {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.tile {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: #4d90ff;
  border: 1px solid #616161;
  cursor: pointer;
}

.tile:hover {
  background-color: #9b9b9b;
}

#D {
  background-color: #64dd17;
}

#O {
  background-color: #ff5252;
}
</style>

<script>
export default {
  name: "Board",
  created: function() {
    window.addEventListener("resize", () => {
      this.board = this.Create_Matrix(this.padding, this.width);
    });
  },
  destroyed: function() {
    window.addEventListener("resize", () => {
      this.board = this.Create_Matrix(this.padding, this.width);
    });
  },
  props: {
    padding: Number,
    width: Number,
  },
  methods: {
    Create_Matrix: function(p, a) {
      var width = Math.floor((window.innerWidth - 2 * p) / a);
      var height = Math.floor(
        Math.floor((window.innerHeight - 94 - 2 * p) / a)
      );
      var y_pos = Math.floor(height / 2);
      var x_pos_o = Math.floor(width / 3);
      var x_pos_d = Math.floor((2 * width) / 3);
      var matrix = new Array(height);
      for (var i = 0; i < height; i++) {
        matrix[i] = new Array(width);
        for (var j = 0; j < width; j++) {
          matrix[i][j] = "";
        }
      }
      matrix[y_pos][x_pos_o] = "O";
      matrix[y_pos][x_pos_d] = "D";
      return matrix;
    },
    cssVarsBoard: function() {
      return {
        padding: this.padding + "px",
      };
    },
    cssVarsTile: function() {
      return {
        height: this.height + "px",
        width: this.width + "px",
      };
    },
  },
  data: function() {
    return {
      board: this.Create_Matrix(this.padding, this.width),
    };
  },
};
</script>

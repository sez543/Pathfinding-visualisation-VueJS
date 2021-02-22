<template>
  <div
    onmousedown="event.preventDefault ? event.preventDefault() : event.returnValue = false"
    v-on:mouseleave="end"
    v-on:mouseup="end"
    class="board"
    :style="cssVarsBoard()"
    v-if="mounted"
  >
    <!-- Row Container -->
    <div v-for="(col, i) in board.matrix" :key="i" class="col">
      <div
        v-for="(tiles, index) in col"
        v-bind:class="[
          'tile',
          { origin: tiles.Origin },
          { destination: tiles.Destination },
          { wall: tiles.Wall },
          { visited: tiles.Visited },
          { path: tiles.Path },
          { instant: tiles.Instant },
        ]"
        :key="index"
        :style="cssVarsTile()"
        v-on:mousedown="start(board.matrix, i, index)"
        v-on:mouseover="manage_walls(board.matrix, i, index)"
        v-on:mouseleave="remove(board.matrix, i, index)"
      ></div>
    </div>
  </div>
</template>

<style scoped>
/* Local styles for the board. Responsible for the visuals and animations. */
@import "../assets/styles/board.css";
</style>

<script>
import * as States from "../assets/scripts/board_state.js";
import * as Drawing from "../assets/scripts/drawing.js";
import * as Utilities from "../assets/scripts/utilities.js";
import * as Board_Uitilities from "../assets/scripts/board.js";
import * as Algorithms from "../assets/scripts/algorithms.js";
import * as Patterns from "../assets/scripts/patterns.js";
import * as Animations from "../assets/scripts/animations.js";

export default {
  name: "Board",
  //Functions triggered on window resize. Responsible for maintaining the tile density, predefined in the parent component
  created: function() {
    window.addEventListener("resize", () => {
      this.Reset();
    });
  },
  destroyed: function() {
    window.addEventListener("resize", () => {
      this.Reset();
    });
  },
  /*Variables passed in from the parent component.
   * Padding and Width are both responisble for the symmetrical placement of the grid on the webpage.
   */
  props: {
    padding: Number,
    width: Number,
    is_locked: Boolean,
  },
  //Matrix which stores the board
  data: function() {
    return {
      board: null,
      is_visualising: false,
      is_held: false,
      mode: "add",
      dragged: null,
      mounted: false,
      current_x: 0,
      current_y: 0,
      has_executed: false,
      executed_algorithm: null,
    };
  },
  mounted() {
    this.generate();
    this.mounted = true;
  },
  methods: {
    generate: function() {
      this.board = this.Create_Matrix(this.padding, this.width);
    },
    launch_algorithm: async function(val, instant) {
      this.Clear_Path();
      var src = this.board.origin;
      var dest = this.board.destination;
      var list = this.Create_Adj_List(this.board.matrix);
      switch (val) {
        case "a*":
          await this.A_star(list, src, dest, instant);
          break;
        case "dijkstra":
          await this.Dijkstra(list, src, dest, instant);
          break;
        case "bfs":
          await this.BFS(list, src, dest, instant);
          break;
        case "dfs":
          await this.DFS(list, src, dest, instant);
          break;
      }
    },
    launch_pattern: async function(val) {
      this.Clear_All();
      switch (val) {
        case "random":
          await this.Random_maze(this.board.matrix);
          break;
        case "stair":
          await this.Stair_Pattern(this.board.matrix);
          break;
        case "recursive":
          await this.Recursive_Pattern(this.board.matrix);
          break;
        case "recursive_division":
          await this.Recursive_Division(
            this.board.matrix,
            0,
            this.board.y - 1,
            0,
            this.board.x - 1,
            "v"
          );
          break;
      }
    },

    Clear_All: States.Clear_All,
    Clear_Path: States.Clear_Path,
    Reset: States.Reset,

    start: Drawing.start,
    end: Drawing.end,
    manage_walls: Drawing.manage_walls,
    remove: Drawing.remove,

    cssVarsBoard: Utilities.cssVarsBoard,
    cssVarsTile: Utilities.cssVarsTile,

    Board: Board_Uitilities.Board,
    Create_Matrix: Board_Uitilities.Create_Matrix,
    Create_Adj_List: Board_Uitilities.Create_Adj_List,

    A_star: Algorithms.A_star,
    Dijkstra: Algorithms.Dijkstra,
    printPath: Algorithms.printPath,
    BFS: Algorithms.BFS,
    DFS: Algorithms.DFS,

    Random_maze: Patterns.Random_maze,
    Stair_Pattern: Patterns.Stair_Pattern,
    Recursive_Pattern: Patterns.Recursive_Pattern,
    Recursive_Division: Patterns.Recursive_Division,

    Animate_Visited: Animations.Animate_Visited,
    Animate_Path: Animations.Animate_Path,
    Animate_Visited_Instant: Animations.Animate_Visited_Instant,
    Animate_Path_Instant: Animations.Animate_Path_Instant,
    Animate_Walls_Exclusixe: Animations.Animate_Walls_Exclusixe,
    Animate_Walls_Inclusive: Animations.Animate_Walls_Inclusive,
  },
};
</script>

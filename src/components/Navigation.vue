<template>
  <!-- <nav>
    <md-button class="md-raised md-primary">Default</md-button>
  </nav> -->
  <md-app>
    <md-app-toolbar class="md-primary">
      <div class="settings">
        <md-field>
          <label for="algorithms">Algorithms</label>
          <md-select
            :disabled="is_locked"
            v-model="algorithm"
            name="algorithms"
            id="algorithms"
          >
            <md-option value="dijkstra">Dijkstra's Algorithm</md-option>
            <md-option value="a*">A* Search</md-option>
            <md-option value="bfs">BFS</md-option>
            <md-option value="dfs">DFS</md-option>
          </md-select>
        </md-field>
        <md-field>
          <label for="pattern">Mazes and Patterns</label>
          <md-select
            :disabled="is_locked"
            v-model="pattern"
            name="pattern"
            id="patterns"
          >
            <md-option value="random">Basic Random maze</md-option>
            <md-option value="stair">Simple Stair Pattern</md-option>
            <md-option value="recursive">Simple Recursion</md-option>
            <md-option value="recursive_division"
              >Reccursive Division</md-option
            >
          </md-select>
        </md-field>
        <div class="buttons">
          <md-button
            :disabled="is_locked"
            class="md-raised md-accent"
            v-on:click="run"
            >Start</md-button
          >
          <md-button
            :disabled="is_locked"
            class="md-raised md-accent"
            v-on:click="build"
            >Generate</md-button
          >
          <md-button
            :disabled="is_locked"
            class="md-raised md-accent moderate"
            v-on:click="clear_path"
            >Clear Path</md-button
          >
          <md-button
            :disabled="is_locked"
            class="md-raised md-accent moderate"
            v-on:click="clear_all"
            >Clear All</md-button
          >
          <md-button
            :disabled="is_locked"
            class="md-raised md-accent danger"
            v-on:click="reset"
            >Reset</md-button
          >
          <md-button
            href="https://github.com/sez543/sez543.github.io"
            class="md-icon-button md-raised md-dense"
          >
            <md-icon class="fa fa-github"></md-icon>
          </md-button>
        </div>
      </div>
    </md-app-toolbar>
  </md-app>
</template>

<script>
export default {
  name: "Board",
  methods: {
    run: function() {
      this.$emit("is_run", this.algorithm);
    },
    build: function() {
      this.$emit("build", this.pattern);
    },
    clear_all: function() {
      this.$emit("clear_all");
    },
    clear_path: function() {
      this.$emit("clear_path");
    },
    reset: function() {
      this.$emit("reset");
    },
  },
  props: {
    is_locked: Boolean,
  },
  data: () => {
    return {
      algorithm: [],
      pattern: [],
    };
  },
};
</script>

<style scoped>
@import "../assets/styles/nav.css";
</style>

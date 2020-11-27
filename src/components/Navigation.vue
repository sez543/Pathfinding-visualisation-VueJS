<template>
  <!-- <nav>
    <md-button class="md-raised md-primary">Default</md-button>
  </nav> -->
  <md-app>
    <md-app-toolbar class="md-primary">
      <md-field>
        <label for="algorithms">Algorithms</label>
        <md-select v-model="algorithms" name="algorithms" id="algorithms">
          <md-option value="dijkstra">Dijkstra's Algorithm</md-option>
          <md-option value="a*">A* Search</md-option>
          <md-option value="floyd">Floyd's Algorithm</md-option>
        </md-select>
      </md-field>
      <md-button class="md-raised md-accent">Start</md-button>
      <md-field>
        <label for="patterns">Mazes and Patterns</label>
        <md-select v-model="patterns" name="patterns" id="patterns">
          <md-option value="maze">Basic Random maze</md-option>
          <md-option value="stair">Simple Stair Pattern</md-option>
          <md-option value="reccursive">Reccursive Division</md-option>
        </md-select>
      </md-field>
    </md-app-toolbar>
  </md-app>
</template>

<script>
export default {
  name: "Board",
  data: () => ({
    algorithms: [],
    patterns: [],
  }),
};
</script>

<style>
.md-button .md-ripple {
  padding: 10px !important;
}
</style>

<style scoped>
.md-app-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
}
.md-button {
  height: auto;
  font-size: 1.5em;
}
.md-field {
  max-width: 300px;
}
</style>

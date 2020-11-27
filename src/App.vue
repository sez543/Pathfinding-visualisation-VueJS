<!--
Legend: 'O' -> Origin; 'D' -> Destination; 'W' -> Wall;  'N' -> Weight (Where N is the weight amount)
-->

<template>
  <div id="app">
    <Navigation></Navigation>
    <Board :padding="padding" :width="width"></Board>
  </div>
</template>

<script>
import Board from "./components/Board.vue";
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Board,
    Navigation,
  },
  data: function() {
    return {
      padding: 20,
      width: 25,
    };
  },
  methods: {},
};
</script>

<!-- Global Styles -->
<style>
html {
  font-size: 32px;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Fira Code", monospace;
}
</style>

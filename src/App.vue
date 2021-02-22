<!--
Legend: 'O' -> Origin; 'D' -> Destination; 'W' -> Wall;  'N' -> Weight (Where N is the weight amount)
-->

<template>
  <div id="app">
    <Navigation
      ref="Navigation"
      :is_locked="is_locked"
      @is_run="generate"
      @build="construct_pattern"
      @clear_all="clear_all"
      @clear_path="clear_path"
      @reset="reset"
    ></Navigation>
    <Board
      ref="Board"
      :is_locked="is_locked"
      :padding="padding"
      :width="width"
    ></Board>
    <Modal ref="Modal"></Modal>
    <Toggle @toggle="toggle"></Toggle>
  </div>
</template>

<script>
import Board from "./components/Board.vue";
import Navigation from "./components/Navigation.vue";
import Modal from "./components/Modal.vue";
import Toggle from "./components/Toggle.vue";

export default {
  name: "App",
  components: {
    Board,
    Navigation,
    Modal,
    Toggle,
  },
  data: function() {
    return {
      padding: 20,
      width: 31,
      is_locked: false,
    };
  },
  methods: {
    matchHeight() {
      this.h = this.$refs.Navigation.clientHeight;
    },
    async generate(algorithm) {
      this.is_locked = true;
      await this.$refs.Board.launch_algorithm(algorithm, false);
      this.is_locked = false;
    },
    async construct_pattern(pattern) {
      this.is_locked = true;
      await this.$refs.Board.launch_pattern(pattern);
      this.is_locked = false;
    },
    clear_all() {
      this.$refs.Board.Clear_All();
    },
    clear_path() {
      this.$refs.Board.Clear_Path();
    },
    reset() {
      this.$refs.Board.Reset();
    },
    toggle() {
      this.$refs.Modal.show_modal();
    },
  },
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

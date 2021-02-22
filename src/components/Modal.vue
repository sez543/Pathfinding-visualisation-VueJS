<template>
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-title>Pathfinding Visualizer</md-dialog-title>
    <hr />
    <md-tabs md-dynamic-height>
      <md-tab md-label="General">
        <div class="md-display-1 title">What is pathfinding?</div>
        <img src="../assets/media/path_2.png" alt="" class="image small" />
        <p class="md-subheading">
          Pathfinding is the proccess of iterating through a linked system and
          discovering an optimal path between two pre-selected points. In its
          general case the problem applies to graphs with no restrictions on the
          number of neighbouring vortices. However, for the sake of simplicity
          while visualising, a 2-dimensional grid where each element has 4
          neighbours (top, left, bottom, right) is used instead.
        </p>
        <p class="md-subheading">
          If you are interested in the topic and want to learn more about
          Pathfinding in Computer Science, the
          <a href="https://en.wikipedia.org/wiki/Pathfinding"
            >Wikipedia article</a
          >
          is a great starting point. For further reading on any the algorithms
          check out
          <a
            href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/#GraphAlgorithms"
            >GeeksforGeeks' Graph section</a
          >
          where all of the algorithms are thoroughly explained in multiple
          programming languages.
        </p>
      </md-tab>

      <md-tab md-label="Canvas">
        <img src="../assets/media/demo.gif" alt="" class="image large" />
        <p class="md-subheading">
          You can interact with the board to change the initial conditions. Hold
          any mouse button and drag to draw or delete walls from the canvas.
          Optionally, you may also generate a pattern from a predefined list.
        </p>
        <p class="md-subheading">
          Click and drag either the origin (colored in red) or the destination
          (colored in green) in order the change their position.
        </p>
      </md-tab>

      <md-tab md-label="Algorithms">
        <img src="../assets/media/dropdown.gif" alt="" class="image" />
        <p class="md-subheading">
          This visualization tool allows you to select between 4 different
          Pathfinding / Traversal algorithms which you are able to switch
          between from the navigation bar at the top of the web page. Moreover,
          through a different dropdown menu you can choose between several
          patterns / maze generation algorithms to further customization of the
          environment.
        </p>
        <p class="md-subheading">
          If you move either the origin or the destination tile with an
          algorithm executed beforehand, the shortest path will update in real
          time taking into account any changes to the board. To disable this
          simply launch a different algorithm or press any of the orange / red
          buttons up top.
        </p>
      </md-tab>
      <md-tab md-label="Misc">
        <p class="md-headline">
          Thank you for checking out this Visualisation tool!
        </p>
        <p class="md-subheading">
          I hope that you enjoyed the experience and I am looking forward to
          seeing you on my other future projects!
        </p>
        <p class="md-subheading">
          This project is available on my
          <a href="https://github.com/sez543/sez543.github.io">GitHub page</a>.
          Fell free to report any issues / bugs you encounter.
        </p>
      </md-tab>
    </md-tabs>

    <md-dialog-actions>
      <md-button class="md-accent md-raised" @click="showDialog = false"
        >Jump in</md-button
      >
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
export default {
  name: "Modal",
  data: function() {
    return {
      showDialog: true,
    };
  },
  methods: {
    show_modal: function() {
      this.showDialog = true;
    },
  },
};
</script>

<style scoped>
@import "../assets/styles/modal.css";
</style>

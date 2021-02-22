<template>
  <md-button v-on:click="toggle" class="md-fab md-raised md-accent floating">
    <md-icon>info</md-icon>
  </md-button>
</template>

<script>
export default {
  name: "Toggle",
  methods: {
    toggle: function() {
      this.$emit("toggle");
    },
  },
};
</script>

<style scoped>
.floating {
  position: fixed;
  bottom: 15px;
  right: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>

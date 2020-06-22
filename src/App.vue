<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./style.scss";

body {
  overflow-x: hidden;
}

#app {
  @extend .font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $gray;
  color: $white;
}

.btn-dark {
  background-color: $dark-gray !important;
}
</style>

<template>
  <div id="app">
    <div class="d-flex" id="wrapper" :class="{toggled: this.isToggled}">
      <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading">HSKE Media-Streaming</div>
        <div class="list-group list-group-flush">
          <router-link class="list-group-item active" to="/">Home</router-link>
          <router-link class="list-group-item" to="/about">About</router-link>
        </div>
      </div>

      <div id="page-content-wrapper">
        <div class="container-fluid">
          <button
            class="btn btn-primary float-right"
            id="menu-toggle"
            @click="toggleMenu"
          >Toggle Menu</button>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      isToggled: false
    };
  },
  computed: {},
  methods: {
    toggleMenu() {
      this.isToggled = !this.isToggled;
    }
  }
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

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
  background-color: $black !important;
  color: $white;
  border-right: none !important;

  @extend .glow-right;

  .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.15rem;
  }

  .list-group {
    width: 15rem;
  }
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

.list-group-item {
  color: $white;
  background-color: $black !important;
  border-bottom: none !important;
}

.list-group-item:hover {
  color: $white !important;
  background-color: $dark-gray !important;
  text-decoration: none !important;
}

.list-group-item.active {
  @extend .glow-center;
  background-color: $dark-gray !important;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>

<template>
  <div id="app">
    <div class="d-flex" id="wrapper" :class="{toggled: this.isToggled}">
      <div class="bg-light border-right" id="sidebar-wrapper">
        <Sidebar></Sidebar>
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
import Sidebar from "@/components/Sidebar.vue";

export default {

  name: "App",
  components: {
    Sidebar
  },
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
  @extend .glow-right;

  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
  background-color: $black !important;
  color: $white;
  border-right: none !important;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
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

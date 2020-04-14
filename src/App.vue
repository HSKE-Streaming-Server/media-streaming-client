<template>
  <div id="app">
    <div class="d-flex" id="wrapper" :class="{toggled: this.isToggled}">
      <div class="bg-light border-right" id="sidebar-wrapper">
        <Sidebar></Sidebar>
      </div>

      <div id="page-content-wrapper">
        <div class="container-fluid">
          <button id="menu-toggle" @click="toggleMenu">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
          </button>
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
    },
    myEventHandler(e) {
      if (e.target.innerWidth > 768) {
        this.isToggled = false;
      }
    }
  },
  beforeCreate(){
    this.isToggled = window.innerWidth <= 768;
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
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

#menu-toggle {
  padding:0.1rem;
  background: none ;
  border:none;
  span{
    width:2rem;
    margin:0.2rem;
    border: 0.21rem solid;
    display:block;
  }
  #span1{
    border-color: $neon-blue;
  }
  #span2{
    border-color: $neon-blue-green;
  }
  #span3{
    border-color: $neon-green;
  }
}

#menu-toggle:focus{
  border:none;
  outline: none;
}

#menu-toggle:hover{
  #span1{
    -webkit-box-shadow:  2px 2px 3px 0px $neon-blue;
    -moz-box-shadow:  2px 2px 3px 0px $neon-blue;
    box-shadow:  2px 2px 3px 0px $neon-blue;
  }
  #span2{
    -webkit-box-shadow:  2px 2px 3px 0px $neon-blue-green;
    -moz-box-shadow:  2px 2px 3px 0px $neon-blue-green;
    box-shadow:  2px 2px 3px 0px $neon-blue-green;
  }
  #span3{
    -webkit-box-shadow: 2px 2px 3px 0px $neon-green;
    -moz-box-shadow: 2px 2px 3px 0px $neon-green;
    box-shadow: 2px 2px 3px 0px $neon-green;
  }
}

#page-content-wrapper {
  min-width: 100vw;
  height:100vh;
  overflow-y: auto;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

// #wrapper.toggled #menu-toggle {
//     display: none;
// }

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

  #menu-toggle {
    display: none;
  }
}
</style>

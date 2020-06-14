<template>
  <div id="navigation">
    <div class="d-flex" id="wrapper" :class="{toggled: this.isToggled}">
      <div class="bg-light border-right" id="sidebar-wrapper">
        <Sidebar></Sidebar>
      </div>

      <div id="page-content-wrapper">
        <div class="container-fluid h-100">
          <button id="menu-toggle" @click="toggleMenu">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
          </button>
          <NotificationContainer></NotificationContainer>
          <router-view />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import NotificationContainer from "../components/NotificationContainer";
export default {
  name: "Navigation",
  components: {
    Sidebar,
    NotificationContainer
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
    onResize(e) {
      if (e.target.innerWidth > 768) {
        this.isToggled = false;
      }
    }
  },
  beforeCreate() {
    this.isToggled = window.innerWidth <= 768;
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style lang="scss">
@import "../style.scss";

#navigation{
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
  padding: 0.1rem;
  background: none;
  border: none;
  span {
    width: 2rem;
    margin: 0.2rem;
    border: 0.2rem solid;
    display: block;
    border-color:$dark-gray
  }
}

#menu-toggle:focus {
  border: none;
  outline: none;
}

#menu-toggle:hover {
  #span1 {
    -webkit-box-shadow: 0px 0px 3px 0px $neon-blue;
    -moz-box-shadow: 0px 0px 3px 0px $neon-blue;
    box-shadow: 0px 0px 3px 0px $neon-blue;
  }
  #span2 {
    -webkit-box-shadow: 0px 0px 3px 0px $neon-blue-green;
    -moz-box-shadow: 0px 0px 3px 0px $neon-blue-green;
    box-shadow: 0px 0px 3px 0px $neon-blue-green;
  }
  #span3 {
    -webkit-box-shadow: 0px 0px 3px 0px $neon-green;
    -moz-box-shadow: 0px 0px 3px 0px $neon-green;
    box-shadow: 0px 0px 3px 0px $neon-green;
  }
}

#page-content-wrapper {
  min-width: 100vw;
  height: 100vh;
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

<template>
  <div id="sidebar">
    <div class="pt-3 pb-4">
      <router-link id="sidebar-heading" to="/home">
        Media Streaming
      </router-link>
    </div>
    <div class="list-group list-group-flush">
      <router-link class="list-group-item mb-1" :to="{ name: 'home' }"
        >Home</router-link
      >
      <router-link
        class="list-group-item mb-1"
        :to="{ name: 'source', params: { type: 'video' } }"
        >Video</router-link
      >
      <!--<router-link
        class="list-group-item mb-1"
        :to="{ name: 'source', params: { type: 'music' } }"
        >Music</router-link
      >-->
      <router-link class="list-group-item mb-1" :to="{ name: 'settings' }"
        >Setting</router-link
      >
    </div>
    <a id="logout-btn" class="mb-2" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../style.scss";

#sidebar {
  height: 100%;
}

#sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.5rem;
  color: $white;
}

#sidebar-heading:hover {
  text-decoration: none !important;
}

.list-group {
  width: 15rem;
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

.list-group-item.router-link-active {
  @extend .glow-center;
  background-color: $dark-gray !important;
  z-index: 100;
}

#logout-btn {
  color: $white;
  padding-left: 20px;
  position: absolute;
  bottom: 0 !important;
}

#logout-btn:focus {
  color: $white;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}

#logout-btn:hover {
  text-decoration: none;
}
</style>

<template>
  <div id="sidebar">
    <div class="sidebar-heading">Media Streaming</div>
    <div class="list-group list-group-flush">
      <router-link  class="list-group-item mb-1" to="/video" >Video</router-link>
      <router-link  class="list-group-item mb-1" to="/music"  >Music</router-link>
      <router-link  class="list-group-item mb-1" to="/settings" >Setting</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
    };
  },
  computed: {},
  methods: {
  } 
};
</script>

<style lang="scss" scoped>
@import "../style.scss";

  .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.3rem;
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
</style>

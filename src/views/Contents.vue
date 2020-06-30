<!--suppress ALL -->
<template>
  <div class="Contents py-4">
    <h1 class="text-center">{{ source | uppercase }} MEDIATHEK</h1>
    <Carusel class="my-3" :content="media" :source="source"></Carusel>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Carusel from "../components/Carusel.vue";

export default {
  name: "Contents",
  components: {
    Carusel
  },
  props: ["source"],
  data() {
    return {};
  },
  watch: {
    $route() {
      this.fetchAllMedia(this.type);
    }
  },
  computed: {
    ...mapState("media", ["media"])
  }
};
</script>

<style scoped lang="scss">
@import "../style.scss";
h1 {
  background: -webkit-linear-gradient($neon-green, $neon-blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

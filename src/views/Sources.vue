<!--suppress ALL -->
<template>
  <div class="Sources">
    <div class="container">
      <h1 class="text-center">{{ type | uppercase }} CATEGORIES</h1>
      <div class="row">
        <div class="col-md-4 zoom" v-for="source in sources" :key="source.id">
          <Tile class="source" :source="source"></Tile>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Tile from "../components/Tile.vue";
import gsap from "gsap";

export default {
  name: "Sources",
  props: ["type"],
  components: {
    Tile
  },
  computed: {
    ...mapState("source", ["sources"])
  },
  mounted() {
    gsap.from(".source", {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: "power1",
      stagger: 0.1
    });
  }
};
</script>

<style scoped lang="scss">
@import "../style.scss";
.zoom {
  transition: transform 0.2s;
}

.zoom:hover {
  transform: scale(1.1);
}
h1 {
  background: -webkit-linear-gradient($neon-green, $neon-blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

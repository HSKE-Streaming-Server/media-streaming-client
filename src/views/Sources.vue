<template>
  <div class="Sources">
    <div class="container">
      <h1>{{type}} Sources</h1>
      <div class="row">
        <div class="col-md-4">
          <Tile></Tile>
        </div>
        <div class="col-md-4">
          <Tile></Tile>
        </div>
        <div class="col-md-4">
          <Tile></Tile>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tile from "@/components/Tile.vue";

export default {
  name: "Sources",
  components: {
    Tile
  },
  data() {
    return {
      type: ""
    };
  },
  computed: {},
  methods: {},
  created() {
    this.type = this.$router.currentRoute.params.type;
  }
};
</script>
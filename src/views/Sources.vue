<template>
  <div class="Sources">
    <div class="container">
      <h1>{{ type }} Categories</h1>
      <div class="row">
        <div class="col-md-4" v-for="source in sources" :key="source.id">
          <Tile :source="source"></Tile>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Tile from "@/components/Tile.vue";

export default {
  name: "Sources",
  props: ["type"],
  components: {
    Tile
  },
  computed: {
    ...mapState("source", ["sources"])
  }
};
</script>

<style></style>

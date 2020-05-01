<template>
  <div class="Sources">
    <div class="container">
      <h1>{{ type }} Sources</h1>
      <div class="row">
        <div class="col-md-4">
          <tile v-for="source in sources" :key="source.id" :source="source">
            {{ source["name"] }}
          </tile>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Tile from "@/components/Tile.vue";

export default {
  name: "Sources",
  components: {
    Tile
  },
  props: ["type"],
  /*watch: {
    $route() {
      this.fetchAllSources(this.type);
    }
  },*/
  created() {
    this.fetchAllSources(this.type);
    console.log(this.sources);
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("source", ["sources"])
  },
  methods: {
    ...mapActions("source", ["fetchAllSources"])
  }
};
</script>

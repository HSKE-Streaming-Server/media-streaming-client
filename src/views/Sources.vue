<template>
  <div class="Sources">
    <div class="container">
      <h1>{{type}} Sources</h1>
      <div class="row">
        <div class="col-md-4">
          <Tile 
          text="test1" 
          url="/contents/own"
          ></Tile>
        </div>
        <div class="col-md-4">
          <Tile
            text="test2"
            url="/contents/ZDF"
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/ZDF_logo.svg/1280px-ZDF_logo.svg.png"
          ></Tile>
        </div>
        <div class="col-md-4">
          <Tile
            text="test3"
            url="/contents/DMAX"
            imageSrc="https://sonic-eu1-prod-images.disco-api.com/2017/12/14/55316bd1-5f1e-43df-a886-80ebbb7b6699.png"
          ></Tile>
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
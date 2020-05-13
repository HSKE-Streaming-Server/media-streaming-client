<template>
  <div class="container">
    <div class="row align-items-center">
        <div class="col-6 mt-5 card" >
          <img class="card-img-top mt-2" :src="mediaStream['image']" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <router-link  class="btn btn-primary" :to="{ name: 'play-now' }"> Play Now</router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Stream",
  props: ["stream_id"],

  created() {
    this.fetchStream(this.stream_id);
  },
  computed: {
    ...mapState("stream", ["stream", "mediaStream"]),

  },
  methods: {
    ...mapActions("stream", ["fetchStream"]),
    ...mapActions("history", ["addToHistory"])
  }
};
</script>

<style scoped lang="scss">
  @import "../style.scss";
  .card {
    margin: 0 auto;
    float: none;
    margin-bottom: 10px;
    background-color: $dark-gray;
  }
  .card-body {
    background-color: $dark-gray;

    p {
      color: white;
    }
  }
</style>

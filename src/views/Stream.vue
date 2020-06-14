<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-6 mt-5 card">
        <img
          class="card-img-top mt-2"
          src="http://placehold.it/380?text=POSTER"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">Here some description will be written</p>
          <router-link
            class="btn btn-primary"
            :to="{
              name: 'play-now',
              params: { stream_id: stream_id, settings: settings }
            }"
            v-on:click.native="addToHistory(stream_id)"
          >
            Play Now</router-link
          >
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
  computed: {
    ...mapState("settings", ["settings"])
  },
  methods: {
    ...mapActions("history", ["addToHistory"]),
    ...mapActions("settings", ["fetchAllSettings"])
  },
  created() {
    this.fetchAllSettings();
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

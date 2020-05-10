<template>
  <div class="container">
    <h1 class="text-center">MediaPlayer for: {{ mediaName }}</h1>
    <router-link  :to="{ name: 'play-now' }"> Play Now</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
//import VideoPlayer from "@/components/VideoPlayer.vue";

export default {
  name: "Stream",
  props: ["stream_id", "source"],

  created() {
      this.fetchStream(this.stream_id);
  },
  computed: {
    ...mapState("stream", ["stream", "mediaName"]),

  },
  methods: {
    ...mapActions("stream", ["fetchStream"])
  }
};
</script>

<style scoped></style>

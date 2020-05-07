<template>
  <div class="container">
    <h1 class="text-center">MediaPlayer for: {{ mediaName }}</h1>
    <video-player :options="videoOptions" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  name: "Stream",
  props: ["stream_id", "source"],
  components: {
    VideoPlayer
  },
  created() {
      this.fetchStream(this.stream_id);
  },
  computed: {
    ...mapState("stream", ["stream", "mediaName"]),
    videoOptions() {
      return {
        autoplay: false,
        controls: true,
        sources: [
          {
            src:  this.stream.stream_link,
            type: "application/dash+xml"
          }
        ],
        poster:"http://placehold.it/380?text=DMAX Video 2"
      };
    }
  },
  methods: {
    ...mapActions("stream", ["fetchStream"])
  }
};
</script>

<style scoped></style>

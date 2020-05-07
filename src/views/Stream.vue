<template>
  <div>
    <h1 class="text-center">MediaPlayer for: {{ mediaName }}</h1>
    <video-player :options="videoOptions" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  name: "Stream",
  props: ["stream_id", "media"],
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
        ]
      };
    }
  },
  methods: {
    ...mapActions("stream", ["fetchStream"]),
    ...mapActions("history", ["addToHistory"])
  }
};
</script>

<style scoped></style>

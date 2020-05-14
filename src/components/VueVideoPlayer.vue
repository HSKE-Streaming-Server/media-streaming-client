<template>
  <video-player   :options="videoOptions" />
</template>

<script>
  import VideoPlayer from "@/components/VideoPlayer.vue";
  import {mapState} from "vuex";

export default {
  name: "VueVideoPlayer",
  components: {
    VideoPlayer
  },
  computed: {
    ...mapState("stream", ["stream"]),
    videoOptions() {
      return {
        autoplay: false,
        controls: true,
        sources: [
          {
            src:  this.stream['stream_link'],
            type: "application/dash+xml"
          }
        ],
        poster:"http://placehold.it/380?text=POSTER"
      };
    }
  },
};
</script>

<style scoped></style>

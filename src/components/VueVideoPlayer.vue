<template>
  <video-player  style="background-image: url('../assets/monitor.jpeg')" :options="videoOptions" />
</template>

<script>
  import VideoPlayer from "@/components/VideoPlayer.vue";
  import {mapState} from "vuex";

export default {
  name: "VueVideoPlayer",
  components: {
    VideoPlayer
  },
  props: [''],
  computed: {
    ...mapState("stream", ["stream", "mediaName"]),
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
        poster:"http://placehold.it/380?text=DMAX Video 2"
      };
    }
  },
};
</script>

<style scoped></style>

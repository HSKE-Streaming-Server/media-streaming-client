<template>
  <div class="container">
    <div class="row">
      <div class="col-6" style="width: 18rem; height: 18rem" >
        <video  ref="videoPlayer" class="video-js"></video>

      </div>
    </div>

  </div>
</template>

<script>
import videojs from "video.js";
export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      player: null
    };
  },
  mounted() {
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>

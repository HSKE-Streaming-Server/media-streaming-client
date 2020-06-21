<template>
  <div class="container">
    <div class="row">
      <div width="900" height="600" class="card mt-5">
        <video
          width="900"
          height="600"
          ref="videoPlayer"
          @play="play"
          class="vjs-matrix video-js vjs-volume-level vjs-big-play-centered"
        ></video>
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
    },
    detail: {}
  },
  data() {
    return {
      player: null,
      timeout: null,
      played: false
    };
  },
  created() {
    if (this.detail["livestream"] === false) {
      this.$swal({
        title: "The Video is almost ready!",
        text:
          "Please wait while the video is buffering. This can take a minute or two!",
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false
      });
    }
  },
  mounted() {
    if (this.player != null) this.player.reset();
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady() {}
    );
    this.timeout = setTimeout(() => {
      if (this.played === false) {
        window.location.reload()
      }
    }, 50000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
    this.$swal.close();
    if (this.player) {
      this.player.reset();
      this.player.dispose();
    }
  },
  methods: {
    play() {
      if (this.detail.livestream === false) {
        this.played = true;
        this.$swal.close();
      }
    }
  }
};
</script>

<style>
.card {
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
  background-color: rgb(97, 97, 97);
}
/* Change all text and icon colors in the player. */
.vjs-matrix.video-js {
}

/* Change the border of the big play button. */
.vjs-matrix .vjs-big-play-button {
  border-color: #00ff00;
  color: rgb(0, 255, 255);
}
.vjs-volume-level {
}
.vjs-play-progress {
}
.vjs-slider-bar {
}
</style>

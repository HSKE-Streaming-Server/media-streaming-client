<template>
  <div class="container">
    <div class="row">
      <div width="900" height="600" class="card mt-5" >
        <video width="900" height="600"  ref="videoPlayer" class="vjs-matrix video-js vjs-volume-level vjs-big-play-centered"></video>

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
    color:rgb(0,255,255);
  }
  .vjs-volume-level {

  }
  .vjs-play-progress{

  }
  .vjs-slider-bar{

  }
</style>
<template>
  <div>
    <div v-if="loading">
      <loader-dots
        :color="'rgb(97, 97, 97)'"
        background="white"
        :duration="0.5"
        :size="35"
      />
    </div>
    <div v-else>
      <video-player :options="videoOptions" />
    </div>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";
import StreamsServices from "../services/StreamsServices";
import loaderDots from "@nulldreams/vue-loading/src/components/dots";

//import { mapState, mapActions } from "vuex";

export default {
  name: "VueVideoPlayer",
  components: {
    VideoPlayer,
    loaderDots
  },
  data() {
    return {
      player: null,
      stream_link: "",
      loading: false
    };
  },
  created() {
    this.loading = true;
    StreamsServices.getStream(this.stream_id, this.settings)
      .then(response => {
        this.stream_link = response.data.stream_link;
      })
      .finally(() => (this.loading = false));
  },
  props: ["stream_id", "settings"],
  computed: {
    videoOptions() {
      return {
        autoplay: false,
        controls: true,
        sources: [
          {
            src: this.stream_link,
            type: "application/dash+xml"
          }
        ],
        poster: "http://placehold.it/380?text=DMAX Video 2"
      };
    }
  }
};
</script>

<style scoped></style>

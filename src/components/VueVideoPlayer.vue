<template>
  <div>
    <div v-if="loading">
      <div class="text-center">
        <div
          class="spinner-border m-5 spinner-border-lg"
          style="width: 3rem; height: 3rem;  border-top-color: rgb(136, 255, 24);
                                                                  border-left-color: rgb(136, 255, 24);
                                                                  border-right-color: rgb(136, 255, 24);
                                                                  border-bottom-color: rgb(97, 97, 97); "
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
    <div v-else>
      <video-player :options="videoOptions" />
    </div>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";
import StreamsServices from "../services/StreamsServices";
import NProgress from "nprogress";

export default {
  name: "VueVideoPlayer",
  components: {
    VideoPlayer
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
    NProgress.start();
    StreamsServices.getStream(this.stream_id, this.settings)
      .then(response => {
        this.stream_link = response.data.stream_link;
      })
      .finally(() => {
        NProgress.done();
        this.loading = false;
      });
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


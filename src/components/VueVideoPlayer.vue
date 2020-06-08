<template>
  <div class="h-100">
    <div v-if="loading" class="h-100">
     <table class="w-100 h-100">
       <tr>
         <td class="text-center align-middle">
        <div
          class="spinner-border m-5 spinner-border-lg"
          style="width: 3rem; height: 3rem;  border-top-color: rgb(136, 255, 24);
                                                                  border-left-color: rgb(136, 255, 24);
                                                                  border-right-color: rgb(136, 255, 24);
                                                                  border-bottom-color: rgb(97, 97, 97); "
          role="status" >
          <span class="sr-only">Loading...</span>
        </div>
         </td>
       </tr>
     </table>
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
import CookieService from "../services/CookieSerice";

//import { mapState, mapActions } from "vuex";

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
    let token = CookieService.getToken();
    StreamsServices.getStream(this.stream_id, this.settings,token)
      .then(response => {
        this.stream_link = response.data.stream_link;
      })
      .finally(() => {
        NProgress.done();
        this.loading = false;
        this.keepAlive();
        this.interval = setInterval(this.keepAlive, 20000);
      });
  },
  props: ["stream_id", "settings"],
  computed: {
    videoOptions() {
      return {
        autoplay: true,
        controls: true,
        liveui: true,
        //SeekToLive: true
        sources: [
          {
            src: this.stream_link,
            type: "application/dash+xml"
          }
        ],
        poster: "http://placehold.it/380?text=DMAX Video 2"
      };
    }
  },
  methods: {
    keepAlive() {
        StreamsServices.postKeepAlive({
          token: CookieService.getToken(),
          audiopreset: this.settings.videoPresetId,
          videopreset: this.settings.audioPresetId,
          transcodedVideoUri: this.stream_link
        }).then(() => {});
    }
  }
};
</script>


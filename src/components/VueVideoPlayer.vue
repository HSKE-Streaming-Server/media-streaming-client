<template>
  <div class="h-100">
    <div v-if="loading" class="h-100">
      <table class="w-100 h-100">
        <tr>
          <td class="text-center align-middle">
            <div class="spinner-border m-5 spinner-border-lg" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      <video-player :options="videoOptions" :detail="detail" />
    </div>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";
import StreamsServices from "../services/StreamsServices";
import NProgress from "nprogress";
import CookieService from "../services/CookieSerice";
import {mapActions, mapState} from "vuex";

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
      loading: false,
      detail: null
    };
  },
  created() {
    this.fetchAllSettings();
    this.loading = true;
    NProgress.start();
    let token = CookieService.getToken();
    StreamsServices.postDetail({ streamId: this.stream_id, token: token }).then(
      response => {
        console.log("test");
        this.detail = response.data;
      }
    );
    StreamsServices.getStream(this.stream_id, this.settings, token)
      .then(response => {
        this.stream_link = response.data.stream_link;
      })
      .finally(() => {
        NProgress.done();
        this.loading = false;
        this.keepAlive();
        this.interval = setInterval(this.keepAlive, 20000);
      })
      .catch(error => {
        const notification = {
          type: "error",
          message: "There was a problem fetching the Video: " + error.message
        };
        this.$store.dispatch("notification/addNotification", notification, {
          root: true
        });
      });
  },
  beforeDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
  props: ["stream_id"],
  computed: {
    ...mapState("settings", ["settings"]),
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
        poster: "http://placehold.it/380?text=" + this.detail.name
      };
    }
  },

  methods: {
    ...mapActions("settings", ["fetchAllSettings"]),
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

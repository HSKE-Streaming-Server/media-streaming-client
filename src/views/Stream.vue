<template>
  <div class="container">
    <div class="row align-items-center" v-if="detail != null">
      <div class="col-6 mt-5 card">
        <img
          class="card-img-top mt-2"
          :src="'http://placehold.it/380?text=' + detail.name"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">{{ detail.description }}</p>
          <table>
            <tr>
              <td>
                <router-link
                  class="btn"
                  :to="{
                name: 'play-now',
                params: { stream_id: stream_id,settings:settings}
              }"
                  v-on:click.native="addToHistory(stream_id)"
                >Play Now</router-link>
              </td>
              <td>
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle preset"
                    type="button"
                    id="dropdownMenuButton1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    v-bind:class="{'already-transcoded': isTrancoded('video',settings.videoPresetId)}"
                  >{{presets.videoPresets[settings.videoPresetId].displayName}}</button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a
                      v-for="(preset, index) in presets.videoPresets"
                      :key="`preset-${index}`"
                      class="dropdown-item preset"
                      v-on:click="setSetting('videoPresetId',preset.presetID)"
                      v-bind:class="{'already-transcoded': isTrancoded('video',preset.presetID)}"
                    >{{preset.displayName}}</a>
                  </div>
                </div>
              </td>
              <td>
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle preset"
                    type="button"
                    id="dropdownMenuButton2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    v-bind:class="{'already-transcoded': isTrancoded('audio',settings.audioPresetId)}"
                  >{{presets.audioPresets[settings.audioPresetId].displayName}}</button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a
                      v-for="(preset, index) in presets.audioPresets"
                      :key="`preset-${index}`"
                      class="dropdown-item preset"
                      v-on:click="setSetting('audioPresetId',preset.presetID)"
                      v-bind:class="{'already-transcoded': isTrancoded('audio',preset.presetID)}"
                    >{{preset.displayName}}</a>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <table class="w-100 h-100" v-if="detail == null">
      <tr>
        <td class="text-center align-middle">
          <div class="spinner-border m-5 spinner-border-lg" role="status"></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import StreamsServices from "../services/StreamsServices";
import CookieSerice from "../services/CookieSerice";
import { mapActions , mapState} from "vuex";

export default {
  name: "Stream",
  props: ["stream_id"],
  data() {
    return {
      detail: null
    };
  },
  computed: {
    ...mapState("presets", ["presets"]),
    ...mapState("settings", ["settings"])
  },
  methods: {
    ...mapActions("settings", ["fetchAllSettings"]),
    ...mapActions("presets", ["fetchAllPresets"]),
    ...mapActions("history", ["addToHistory"]),
    setSetting: function(key, value) {
      this.settings[key] = value;
    },
    isTrancoded: function(key, id) {
      if (this.detail.existingTranscodes.length == 0) return false;
      if (key == "video") {
        return (
          this.detail.existingTranscodes.filter(preset => {
            return (
              preset.videoPreset == id &&
              preset.audioPreset == this.settings.audioPresetId
            );
          }).length > 0
        );
      } else if (key == "audio") {
        return (
          this.detail.existingTranscodes.filter(preset => {
            return (
              preset.audioPreset == id &&
              preset.videoPreset == this.settings.videoPresetId
            );
          }).length > 0
        );
      }
    }
  },
  created() {
    this.fetchAllSettings();
    this.fetchAllPresets();
    let token = CookieSerice.getToken();
    StreamsServices.postDetail({ streamId: this.stream_id, token: token }).then(
      response => {
        this.detail = response.data;
      }
    );
    if (this.settings.videoPresetId == -1) {
      if (this.presets.length > 0) {
        this.settings.videoPresetId = this.presets.videoPresets[
          Object.keys(this.presets.videoPresets)[0]
        ].presetID;
      } else {
        this.settings.videoPresetId = 1;
      }
    }
    if (this.settings.audioPresetId == -1) {
      if (this.presets.length > 0) {
        this.settings.audioPresetId = this.presets.audioPresets[
          Object.keys(this.presets.audioPresets)[0]
        ].presetID;
      } else {
        this.settings.audioPresetId = 1;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../style.scss";

.card {
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
  background-color: $dark-gray;
}
.card-body {
  background-color: $dark-gray;

  p {
    color: white;
  }
  .btn {
    background-color: $neon-blue-green;
    transition: background 0.75s;
  }

  .btn:hover {
    background-color: $neon-blue !important;
  }
}

.dropdown-menu {
  background-color: $gray !important;
}

.dropdown-item:hover {
  cursor: pointer;
}

.preset {
  background-color: $gray !important;
  color: $white;
}

.preset.already-transcoded {
  background-color: $neon-blue-green !important;
  color: $black;
}
</style>

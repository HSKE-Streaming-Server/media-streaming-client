<template>
  <div class="settings">
    <div class="container">
      <table class="m-4 w-100">
        <tr>
          <td>
            <h3>Video</h3>
          </td>
          <td>
            <div class="dropdown">
              <button
                class="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >{{presets.videoPresets[settings.videoPresetId].displayName}}</button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a
                  v-for="(preset, index) in presets.videoPresets"
                  :key="`preset-${index}`"
                  class="dropdown-item"
                  v-on:click="setSetting('videoPresetId',preset.presetID)"
                >{{preset.displayName}}</a>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Resolution</td>
          <td>{{presets.videoPresets[settings.videoPresetId].resolutionX}} x {{presets.videoPresets[settings.videoPresetId].resolutionY}}</td>
        </tr>
        <tr>
          <td>Bitrate</td>
          <td>{{presets.videoPresets[settings.videoPresetId].bitrate}} Bit</td>
        </tr>

        <tr>
          <td colspan="2">
            <hr />
          </td>
        </tr>

        <tr>
          <td>
            <h3>Audio</h3>
          </td>
          <td>
            <div class="dropdown">
              <button
                class="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >{{presets.audioPresets[settings.audioPresetId].displayName}}</button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a
                  v-for="(preset, index) in presets.audioPresets"
                  :key="`preset-${index}`"
                  class="dropdown-item"
                  v-on:click="settings.audioPresetId = preset.presetID"
                >{{preset.displayName}}</a>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Bitrate</td>
          <td>{{presets.audioPresets[settings.audioPresetId].bitrate}} Bit</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Settings",
  data() {
    return {
      presets: {
        videoPresets: [
          {
            presetID: 0,
            displayName: "bad",
            resolutionX: 800,
            resolutionY: 600,
            bitrate: 128
          },
          {
            presetID: 1,
            displayName: "medium",
            resolutionX: 1200,
            resolutionY: 900,
            bitrate: 128
          },
          {
            presetID: 2,
            displayName: "good",
            resolutionX: 1920,
            resolutionY: 1080,
            bitrate: 256
          }
        ],
        audioPresets: [
          {
            presetID: 0,
            displayName: "bad",
            bitrate: 64
          },
          {
            presetID: 1,
            displayName: "medium",
            bitrate: 128
          },
          {
            presetID: 2,
            displayName: "good",
            bitrate: 256
          }
        ]
      }
    };
  },
  computed: {
    ...mapState("settings", ["settings"])
  },
  methods: {
    ...mapActions("settings", ["fetchAllSettings"]),
    ...mapActions("settings", ["saveAllSettings"]),
    setSetting: function(key, value) {
      this.settings[key] = value;
      this.saveAllSettings(this.settings);
    }
  },
  created() {
    this.fetchAllSettings();
    if(this.settings == null){
      this.saveAllSettings({
        videoPresetsId:0,
        audioPresetsId:0
      });
    }
  }
};
</script>
<style scoped lang="scss">
@import "../style.scss";

hr {
  border-color: $dark-gray;
}

.btn-dark {
  background-color: $dark-gray !important;
}
</style>
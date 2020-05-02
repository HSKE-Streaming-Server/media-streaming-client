<template>
  <div class="settings">
    <div class="container">
      <table class="m-4 w-100">
        <tr v-if="presets.videoPresets">
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
        <tr v-if="presets.videoPresets">
          <td>Resolution</td>
          <td>{{presets.videoPresets[settings.videoPresetId].resolutionX}} x {{presets.videoPresets[settings.videoPresetId].resolutionY}}</td>
        </tr>
        <tr v-if="presets.videoPresets">
          <td>Bitrate</td>
          <td>{{presets.videoPresets[settings.videoPresetId].bitrate}} Bit</td>
        </tr>

        <tr v-if="presets.audioPresets">
          <td colspan="2">
            <hr />
          </td>
        </tr>

        <tr v-if="presets.audioPresets">
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
                  v-on:click="setSetting('audioPresetId',preset.presetID)"
                >{{preset.displayName}}</a>
              </div>
            </div> 
          </td>
        </tr>
        <tr v-if="presets.audioPresets">
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
    return {};
  },
  computed: {
    ...mapState("presets", ["presets"]),
    ...mapState("settings", ["settings"])
  },
  methods: {
    ...mapActions("presets", ["fetchAllPresets"]),
    ...mapActions("settings", ["fetchAllSettings"]),
    ...mapActions("settings", ["saveAllSettings"]),
    setSetting: function(key, value) {
      this.settings[key] = value;
      this.saveAllSettings(this.settings);
    }
  },
  created() {
    this.fetchAllPresets();
    this.fetchAllSettings();
    if(this.settings == null){
      //set defaults
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
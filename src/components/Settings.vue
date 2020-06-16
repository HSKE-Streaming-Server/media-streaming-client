<template>
  <div class="settings">
    <div class="container py-4">
      <table class="mx-4 w-100" v-if="settings">
        <tr v-if="presets && presets.videoPresets&& settings && settings.videoPresetId != -1">
          <td>
            <h3>Video</h3>
          </td>
          <td>
            <div class="dropdown">
              <button
                class="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
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
        <tr v-if="presets && presets.videoPresets&& settings && settings.videoPresetId != -1">
          <td colspan="2" class="description py-2">"{{presets.videoPresets[settings.videoPresetId].description}}"</td>
        </tr>
        <tr v-if="presets && presets.videoPresets&& settings && settings.videoPresetId != -1">
          <td>Resolution</td>
          <td>{{presets.videoPresets[settings.videoPresetId].resolutionX}} x {{presets.videoPresets[settings.videoPresetId].resolutionY}}</td>
        </tr>
        <tr v-if="presets && presets.videoPresets&& settings && settings.videoPresetId != -1">
          <td>Bitrate</td>
          <td>{{presets.videoPresets[settings.videoPresetId].bitrate}} Bit</td>
        </tr>

        <tr v-if="presets && presets.audioPresets&& settings  && settings.audioPresetId != -1">
          <td colspan="2">
            <hr />
          </td>
        </tr>

        <tr v-if="presets && presets.audioPresets&& settings && settings.audioPresetId != -1">
          <td>
            <h3>Audio</h3>
          </td>
          <td>
            <div class="dropdown">
              <button
                class="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
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
        <tr v-if="presets.audioPresets&& settings  && settings.audioPresetId != -1">
          <td colspan="2" class="description py-2">"{{presets.audioPresets[settings.audioPresetId].description}}"</td>
        </tr>
        <tr v-if="presets.audioPresets&& settings  && settings.audioPresetId != -1">
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
    },
    getPreset(key, index) {
      return this.presets[key].filter(preset => {
        return preset.id == index;
      });
    }
  },
  created() {
    this.fetchAllPresets();
    this.fetchAllSettings();
    if (this.settings.videoPresetId == -1) {
      if (this.presets.length > 0) {
        this.settings.videoPresetId = this.presets.videoPresets[
          Object.keys(this.presets.videoPresets)[0]
        ].presetID;
      } else {
        this.settings.videoPresetId = 1;
      }
      this.saveAllSettings(this.settings);
    }
    if (this.settings.audioPresetId == -1) {
      if (this.presets.length > 0) {
        this.settings.audioPresetId = this.presets.audioPresets[
          Object.keys(this.presets.audioPresets)[0]
        ].presetID;
      } else {
        this.settings.audioPresetId = 1;
      }
      this.saveAllSettings(this.settings);
    }
  }
};
</script>
<style scoped lang="scss">
@import "../style.scss";

hr {
  border-color: $dark-gray;
}

.btn {
  background-color: $neon-blue-green !important;
  transition: background 0.75s;
}

.btn:hover {
  background-color: $neon-blue !important;
}
dropdown-item {
  cursor: pointer;
}

.description{
  font-style:italic; 
  color:lightgray;
}

.dropdown-item:hover{
  cursor: pointer;
}

</style>
import StreamsServices from "../../services/StreamsServices";
import CookieService from "../../services/CookieSerice";

export const namespaced = true;

export const state = {
  presets: []
};

export const mutations = {
  SET_ALL_PRESETS(state, presets) {
    let temp = {};
    Object.keys(presets).forEach(key => {
      temp[key] = {};
      presets[key].forEach(preset => {
        temp[key][preset.presetID] = preset;
      });
    });
    state.presets = temp;
  }
};

export const actions = {
  fetchAllPresets({ commit, dispatch }) {
    let token = CookieService.getToken();
    StreamsServices.getPresets(token)
      .then(response => {
        commit("SET_ALL_PRESETS", response.data);
      })
      .catch(error => {
        const notification = {
          type: "error",
          message: "There was a problem fetching the presets: " + error.message
        };
        dispatch("notification/addNotification", notification, { root: true });
      });
  }
};

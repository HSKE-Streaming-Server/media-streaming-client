import StreamsServices from "../../services/StreamsServices";

export const namespaced = true;

export const state = {
  presets: []
};

export const mutations = {
  SET_ALL_PRESETS(state, presets) {
    state.presets = presets;
  }
};

export const actions = {
  fetchAllPresets({ commit }) {
    StreamsServices.getPresets().then(response => {
      commit("SET_ALL_PRESETS", response.data);
    });
  }
};

import StreamsServices from "../../services/StreamsServices";

export const namespaced = true;

export const state = {
  sources: []
};

export const mutations = {
  SET_ALL_SOURCES(state, sources) {
    state.sources = sources;
  }
};

export const actions = {
  fetchAllSources({ commit }, type) {
    StreamsServices.getSource(type).then(response => {
      commit("SET_ALL_SOURCES", response.data);
    });
  }
};
import StreamsServices from "../../services/StreamsServices";

export const namespaced = true;

export const state = {
  stream: []
};

export const mutations = {
  SET_STREAM(state, stream) {
    state.stream = stream;
  }
};

export const actions = {
  fetchStream({ commit }, id) {
    StreamsServices.getStream(id).then(response => {
      commit("SET_STREAM", response.data);
    });
  }
};

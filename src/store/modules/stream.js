import StreamsServices from "../../services/StreamsServices";

export const namespaced = true;

export const state = {
  stream: [],
  mediaStream: ""
};

export const mutations = {
  SET_STREAM(state, stream) {
    state.stream = stream;
  },
  SET_MEDIA(state, media) {
    state.mediaStream = media;
  }
};

export const actions = {
  fetchStream({ commit }, id) {
    StreamsServices.getStream(id).then(response => {
      commit("SET_STREAM", response.data);
    });
    StreamsServices.getMediaName(id).then(response => {
      commit("SET_MEDIA", response.data);
    });
  }
};

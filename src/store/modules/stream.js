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
  fetchStream({ commit }, data) {
    StreamsServices.getStream(data.stream_id, data.settings).then(response => {
      commit("SET_STREAM", response.data);
    });
    StreamsServices.getMedia(data.stream_id).then(response => {
      commit("SET_MEDIA", response.data); //UM aktuellen Media zu holen
    });
  }
};

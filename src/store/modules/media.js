import StreamsServices from "../../services/StreamsServices";

export const namespaced = true;

export const state = {
  media: []
};

export const mutations = {
  SET_ALL_Media(state, media) {
    state.media = media;
  }
};

export const actions = {
  fetchAllMedia({ commit, rootState }, source) {
    let token = rootState.authentication.userData.token;
    StreamsServices.getMedia({source: source, token: token}).then(response => {
      commit("SET_ALL_Media", response.data);
    });
  }
};

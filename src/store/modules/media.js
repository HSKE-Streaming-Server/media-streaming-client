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
   fetchAllMedia({ commit }, source) {
    return StreamsServices.getMedia(source).then(response => {
      commit("SET_ALL_Media", response.data);
    });
  }
};

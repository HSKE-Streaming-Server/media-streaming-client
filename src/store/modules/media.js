import StreamsServices from "../../services/StreamsServices";
import CookieService from "../../services/CookieSerice";

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
    let token = CookieService.getToken();
    return StreamsServices.getMedia(source,token).then(response => {
      commit("SET_ALL_Media", response.data);
    }).catch(error => {
        const notification = {
          type: "error",
          message: "There was a problem fetching all media: " + error.message
        };
        dispatch("notification/addNotification", notification, { root: true });
      });

  }
};

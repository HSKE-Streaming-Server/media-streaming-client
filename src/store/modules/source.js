import StreamsServices from "../../services/StreamsServices";
import CookieService from "../../services/CookieSerice";

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
  fetchAllSources({ commit, dispatch }) {
    let token = CookieService.getToken();
    return StreamsServices.getSource(token)
      .then(response => {
        commit("SET_ALL_SOURCES", response.data);
      })
      .catch(error => {
        const notification = {
          type: "error",
          message: "There was a problem fetching the sources: " + error.message
        };
        dispatch("notification/addNotification", notification, { root: true });
      });
  }
};

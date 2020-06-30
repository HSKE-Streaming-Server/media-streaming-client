import StreamsServices from "../../services/StreamsServices";
import CookieService from "../../services/CookieSerice";

export const namespaced = true;

// noinspection JSUnusedGlobalSymbols
export const state = {
  userData: {
    loggedIn: false,
    name: null,
    token: null
  }
};

// noinspection JSUnusedGlobalSymbols
export const mutations = {
  SET_ALL_UserData(state, userData) {
    state.userData.loggedIn = userData.success;
    state.userData.name = userData.name;
    state.userData.token = userData.token;
  }
};

// noinspection JSUnusedGlobalSymbols
export const actions = {
  login({ commit }, userData) {
    return StreamsServices.postLogin(userData)
      .then(response => {
        commit("SET_ALL_UserData", {
          success: response.data.success,
          name: userData.username,
          token: response.data.userdata.token
        });
        if (response.data.success)
          CookieService.setToken(response.data.userdata.token);
        return response.data.success;
      })
      .catch(() => {
        return false;
      });
  },
  authenticate({ commit, dispatch }) {
    let token = CookieService.getToken();
    if (!token) return false;

    return StreamsServices.postToken(token)
      .then(response => {
        if (response.data.success) {
          commit("SET_ALL_UserData", {
            token: token,
            success: true,
            name: response.data.userdata.username
          });
          return true;
        } else {
          commit("SET_ALL_UserData", {
            token: null,
            loggedIn: false,
            name: null
          });
          CookieService.removeToken();
          return false;
        }
      })
      .catch(error => {
        const notification = {
          type: "error",
          message: "There was a problem with authenticate: " + error.message
        };
        dispatch("notification/addNotification", notification, { root: true });
      });
  },
  logout({ commit }) {
    let token = CookieService.getToken();
    if (!token) return false;
    return StreamsServices.postLogout(token)
      .then(response => {
        if (response.data.success) {
          commit("SET_ALL_UserData", {
            token: null,
            loggedIn: false,
            name: null
          });
          CookieService.removeToken();
        }
        return response.data.success;
      })
      .catch(() => {
        return false;
      });
  }
};

//import StreamsServices from "../../services/StreamsServices";
import CookieService from "../../services/CookieSerice";

export const namespaced = true;

export const state = {
    userData: {
        loggedIn: false,
        name: null,
        token: null
    }
};

export const mutations = {
    SET_ALL_UserData(state, userData) {
        state.userData.loggedIn = userData.success;
        state.userData.name = userData.name;
        state.userData.token = userData.token;
    }
};

export const actions = {
    login({ commit }, userData) {
        // return StreamsServices.postLogin(userData).then(response => {
        //     commit("SET_ALL_UserData",{
        //         success:response.data.success,
        //         name:userData.username,
        //         token:response.data.token
        //     });
        //     if(response.data.success)
        //         CookieService.setToken(response.data.token)
        //     return response.data.success;
        // });

        //TODO: remove fake Data
        commit("SET_ALL_UserData", {
            success: true,
            name: userData.name,
            token: "fake_token"
        });
        CookieService.setToken("fake_token");
        return true;

    },
    authenticate({ commit }, token) {
        // return StreamsServices.postToken(token).then(response => {
        //     if (response.data.success) {
        //         commit("SET_ALL_UserData", { token: token, success: true, name: response.username })
        //     } else {
        //         commit("SET_ALL_UserData", { token: null, loggedIn: false, name: null })
        //         CookieService.removeToken();
        //     }
        //     return response.data.success;
        // });

        //TODO: remove fake Data
        commit("SET_ALL_UserData", {
            success: true,
            name: "fake_user",
            token: token
        });
        CookieService.setToken("fake_token");
        return true;

    },
    logout({ commit }) {
        commit("SET_ALL_UserData", { token: null, loggedIn: false, name: null })
        CookieService.removeToken();
    }
};

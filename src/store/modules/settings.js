import CookieService from "../../services/CookieSerice";

export const namespaced = true;

export const state = {
    settings: {}
};

export const mutations = {
    SET_ALL_SETTINGS(state, settings) {
        state.settings = settings;
    }
};

export const actions = {
    fetchAllSettings({ commit }) {
        let savedSettings = CookieService.getSettings();
        commit("SET_ALL_SETTINGS",savedSettings);
    },
    saveAllSettings({ commit }, newSettings) {
        CookieService.setSettings(newSettings);
        commit("SET_ALL_SETTINGS",newSettings);
    }
};

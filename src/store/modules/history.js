import CookieService from "../../services/CookieSerice";

export const namespaced = true;

export const state = {
    hostory: {}
};

export const mutations = {
    SET_ALL_HISTORY(state, history) {
        state.history = history;
    }
};

export const actions = {
    fetchAllHistory({ commit }) {
        let savedHistory = CookieService.getHistory();
        commit("SET_ALL_HISTORY",savedHistory);
    },
    saveAllHistory({ commit }, newHistory) {
        CookieService.setHistory(newHistory);
        commit("SET_ALL_HISTORY",newHistory);
    }
};

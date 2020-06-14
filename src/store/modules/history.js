import CookieService from "../../services/CookieSerice";

export const namespaced = true;

export const state = {
  hostory: []
};

export const mutations = {
  SET_ALL_HISTORY(state, history) {
    state.history = history;
  }
};

export const actions = {
  fetchAllHistory({ commit }) {
    let savedHistory = CookieService.getHistory();
    if (savedHistory) commit("SET_ALL_HISTORY", JSON.parse(savedHistory));
  },
  addToHistory({ commit }, newHistoryElement) {
    let temp = CookieService.getHistory();
    if (!temp) temp = [];
    else temp = JSON.parse(temp);
    let newHistory = [];
    let result = temp.filter(tempItem => {
      return tempItem.id == newHistoryElement;
    });
    if (result.length == 0) {
      newHistory.push(newHistoryElement);
    }
    newHistory = newHistory.concat(temp);
    newHistory = newHistory.slice(0, 9);
    CookieService.setHistory(JSON.stringify(newHistory));
    commit("SET_ALL_HISTORY", newHistory);
  }
};

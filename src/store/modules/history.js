import CookieService from "../../services/CookieSerice";
import StreamsServices from "../../services/StreamsServices";

export const namespaced = true;

export const state = {
  history: []
};

export const mutations = {
  SET_ALL_HISTORY(state, history) {
    let token = CookieService.getToken();
    history.forEach((streamId) => {
      if (state.history.filter((item) => { return item.id == streamId }).length == 0) {
        StreamsServices.postDetail({ streamId: streamId, token: token }).then(response => {
          state.history.push(response.data);
        });
      }
    });
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

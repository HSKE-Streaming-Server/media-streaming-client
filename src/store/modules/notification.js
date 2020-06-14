export const namespaced = true;

export const state = {
  notifications: []
};

let nextId = 1;
export const mutations = {
  PUSH_NOTIFICATION(state, notification) {
    state.notifications.push({
      ...notification,
      id: nextId++
    });
  },
  DELETE_NOTIFICATION(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationToRemove.id
    );
  }
};

export const actions = {
  addNotification({ commit }, notification) {
    commit("PUSH_NOTIFICATION", notification);
  },
  removeNotification({ commit }, notificationToRemove) {
    commit("DELETE_NOTIFICATION", notificationToRemove);
  }
};

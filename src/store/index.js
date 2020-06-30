import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import * as source from "../store/modules/source.js";
import * as media from "../store/modules/media.js";
import * as stream from "../store/modules/stream.js";
import * as settings from "../store/modules/settings.js";
import * as presets from "../store/modules/presets.js";
import * as authentication from "../store/modules/authentication";
import * as history from "../store/modules/history";
import * as notification from "../store/modules/notification";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    source,
    media,
    stream,
    settings,
    presets,
    authentication,
    history,
    notification
  },

  plugins: [createPersistedState()]
});

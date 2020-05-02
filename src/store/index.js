import Vue from "vue";
import Vuex from "vuex";

import * as source from "@/store/modules/source.js";
import * as media from "@/store/modules/media.js";
import * as stream from "@/store/modules/stream.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    source,
    media,
    stream
  }
});

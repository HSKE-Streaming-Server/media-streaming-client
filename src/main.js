import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "video.js/dist/video-js.css";
import "dashjs/dist/dash.all.debug";
import videojs from "video.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(videojs); // If not work, then import it in the MediaPlayer Component // maybe the "import "videojs-contrib-dash/dist/videojs-dash";" will be missed
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

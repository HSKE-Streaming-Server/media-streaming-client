import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// IMPORT COMPONENTS
import carousel from "vue-carousel";
import VueSweetalert2 from "vue-sweetalert2";

// IMPORT JS
import "dashjs/dist/dash.all.debug";
import "dashjs/dist/dash.all.min";
import "videojs-contrib-dash/dist/videojs-dash.min";

// IMPORT CSS
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "video.js/dist/video-js.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "nprogress/nprogress.css";

// VUE USE
Vue.use(VueSweetalert2);
Vue.filter("uppercase", function(value) {
  return value.toUpperCase();
});
Vue.use(carousel);

// VUE CONFIG
Vue.config.productionTip = false;

// VUE INSTANCE
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

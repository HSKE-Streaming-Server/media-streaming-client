import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "video.js/dist/video-js.css";
import "dashjs/dist/dash.all.debug";
import "dashjs/dist/dash.all.min"
import "videojs-contrib-dash/dist/videojs-dash.min";
import "nprogress/nprogress.css"
//import videojs from "video.js";
import VueResource from 'vue-resource'
import VueSweetalert2 from 'vue-sweetalert2'; //test

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
Vue.use(VueResource);


import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import carousel from "vue-carousel"

Vue.use(carousel);

//Vue.use(videojs); // If not work, then import it in the MediaPlayer Component // maybe the "import "videojs-contrib-dash/dist/videojs-dash";" will be missed
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

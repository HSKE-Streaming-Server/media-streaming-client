import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect:"/video"
  },
  {
    path: "/video",
    name: "Video",
    component: () =>import( "../views/Video.vue")
  },
  {
    path: "/music",
    name: "Music",
    component: () =>import( "../views/Music.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>import("../views/Settings.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

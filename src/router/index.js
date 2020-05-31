import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import store from "../store"

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Home",
    component: () => import("../views/Navigation.vue"),
    children: [
      {
        path: "",
        redirect: "/home"
      },
      {
        path: "/home",
        component: () => import("../views/Home.vue"),
        name: "home"
      },
      {
        path: ":type/categories",
        component: () => import("../views/Sources.vue"),
        name: "source",
        props: true,
        beforeEnter(routeTo, routeFrom, next) {
          store.dispatch("source/fetchAllSources").then(() => {
            next()
          })
        }
      },
      {
        path: "mediathek/:source",
        component: () => import("../views/Contents.vue"),
        name: "contents",
        props: true,
        beforeEnter(routeTo, routeFrom, next) {
          console.log(routeTo);
          store.dispatch("media/fetchAllMedia", routeTo.params.source).then(() => {
            next()
          })
        }
      },
      {
        path: ":source/video/:stream_id",
        component: () => import("../views/Stream.vue"),
        name: "stream",
        props: true,
        beforeEnter(routeTo, routeFrom, next) {
          console.log(routeTo);
          store.dispatch("stream/fetchStream", routeTo.params.source).then(() => {
            next()
          })
        }
      },
      {
        path: ":source/video/:stream_id/play",
        component: () => import("../components/VueVideoPlayer.vue"),
        name: "play-now",
        props: true
      }
    ]
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Navigation.vue"),
    children: [
      {
        path: "/",
        component: () => import("../components/Settings.vue"),
        name: "settings"
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../components/NotFound.vue")
  },
  {
    path: "*",
    redirect: { name: "404" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
});

router.afterEach(() => {
  NProgress.done()
})

export default router;

import Vue from "vue";
import VueRouter from "vue-router";

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
        path: '/home',
        component: () => import("../views/Home.vue"),
        name: 'home'
      },
      {
        path: 'sources/:type',
        component: () => import("../views/Sources.vue"),
        name: "source",
        props: true
      },
      {
        path: 'contents/:source',
        component: () => import("../views/Contents.vue"),
        name: "contents",
        props: true
      },
      {
        path: ':source/video/:stream_id',
        component: () => import("../views/Stream.vue"),
        name: "stream",
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
        path: '/',
        component: () => import("../components/Settings.vue"),
        name: 'settings'
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue")
  }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News.vue")
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/Contacts.vue")
  },
  {
    path: "/places",
    name: "Places",
    component: () => import("../views/Places.vue")
  },
  {
    path: "/domains",
    name: "Domains",
    component: () => import("../views/Domains.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hr",
    name: "HR",
    component: () => import("../views/HR.vue"),
  },
  {
    path: "/tno",
    name: "TNO",
    component: () => import("../views/TNO.vue"),
    children: [
      {
        path: "",
        name: "TNO Home",
        component: () => import("../views/TNO/Home.vue"),
      },
      {
        path: "about",
        name: "TNO About",
        component: () => import("../views/TNO/About.vue"),
      },
      {
        path: "contact",
        name: "TNO Contact",
        component: () => import("../views/TNO/Contact.vue"),
      },
      {
        path: "games",
        name: "TNO Games",
        component: () => import("../views/TNO/Games.vue"),
      },
      {
        path: "incubation",
        name: "Incubation",
        component: () => import("../views/TNO/Incubation.vue"),
      },
      {
        path: "*",
        component: Home,
      },
    ],
  },
  {
    path: "*",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

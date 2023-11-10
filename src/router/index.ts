import { createRouter, createWebHistory } from "vue-router";

// Define your routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  // Add more routes as needed
];

// Create router instance
const router = createRouter({
  // Use createWebHistory for HTML5 history mode
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

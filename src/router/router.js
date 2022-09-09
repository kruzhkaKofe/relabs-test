import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AuthPage from "../views/AuthPage.vue";
import ShopPage from "../views/ShopPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: AuthPage,
  },
  {
    path: "/shop",
    component: ShopPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createApp } from "vue";
import { createPinia } from "pinia";
const pinia = createPinia();
import "./style.css";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import CategoryPage from "./pages/CategoryPage.vue";

const routes = [
  { path: "/", component: HomePage, name: "home" },
  {
    path: "/phim-bo",
    component: CategoryPage,
    name: "phim-bo",
  },
  {
    path: "/tv-shows",
    component: CategoryPage,
    name: "tv-shows",
  },
  {
    path: "/phim-le",
    component: CategoryPage,
    name: "phim-le",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(pinia).use(router).mount("#app");
